import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import { Buffer } from 'buffer';
import dotenv from 'dotenv';
import { createClient } from 'redis';

dotenv.config();

const app = express();
const clientID = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const PORT = process.env.PORT;

const redis_password = process.env.REDIS_PASSWORD;
const redis_host = process.env.REDIS_HOST;
const redis_port = process.env.REDIS_PORT;

app.use(cors({
    origin: 'http://localhost:3000' // Adjust as per your frontend's URL
}));

const redisClient = createClient({
    password: redis_password,
    socket: {
        host: redis_host,
        port: redis_port
    }
});


redisClient.on('error', (err) => console.log('Redis Client Error', err));
await redisClient.connect();

console.log('Client ID:', clientID);
console.log('Client Secret:', clientSecret);

async function refreshAccessToken() {
    const refreshToken = await redisClient.get('refresh_token');
    console.log('Retrieved refresh token:', refreshToken); // Check the retrieved refresh token

    if (!refreshToken) {
        console.error('No refresh token available');
        return; // Exit if no refresh token is available
    }

    try {
        const authString = Buffer.from(`${clientID}:${clientSecret}`).toString('base64');
        console.log('Authorization String:', authString); // Verify the authorization string

        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${authString}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                grant_type: 'refresh_token',
                refresh_token: refreshToken
            })
        });

        if (!response.ok) {
            throw new Error(`Failed to refresh access token: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log('New access token:', data.access_token); // Log the new access token
        console.log('New refresh token:', data.refresh_token); // Log the new refresh token

        if (data.access_token) {
            await redisClient.set('access_token', data.access_token);
        }

        if (data.refresh_token) {
            await redisClient.set('refresh_token', data.refresh_token);
        }

        const expirationTime = new Date().getTime() + (data.expires_in * 1000) - 60000; // Refresh 1 minute early
        console.log('New token expiration epoch:', expirationTime); // Log the new expiration time

        await redisClient.set('tokenExpirationEpoch', expirationTime.toString());
    } catch (error) {
        console.error('Error refreshing access token:', error);
        throw error;
    }
}


async function getCurrentTrack() {
    const accessToken = await redisClient.get('access_token');
    const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: { 'Authorization': `Bearer ${accessToken}` }
    });

    if (response.status === 204) { // No Content
        return null; // No current track is playing
    }

    if (response.status === 401) { // Unauthorized, token likely expired
        await refreshAccessToken();
        return getCurrentTrack(); // Retry fetching the current track after refreshing the token
    }

    if (!response.ok) {
        throw new Error(`Failed to fetch currently playing track: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    if (!data.item) return null; // Sometimes the 'item' field might be missing if nothing is playing

    return {
        name: data.item.name,
        artist: data.item.artists.map(artist => artist.name).join(', '),
        link: data.item.external_urls.spotify,
        status: 'Currently Playing'
    };
}

async function getLastPlayedTrack() {
    const accessToken = await redisClient.get('access_token');
    const tokenExpirationEpoch = await redisClient.get('tokenExpirationEpoch');
    if (!accessToken || new Date().getTime() >= tokenExpirationEpoch) {
        await refreshAccessToken();
    }

    const response = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
        headers: { 'Authorization': `Bearer ${accessToken}` }
    });

    if (!response.ok) {
        if (response.status === 401) {  // Token expired
            await refreshAccessToken();
            return getLastPlayedTrack();  // Retry fetching the last played track
        }
        return null;
    }

    const data = await response.json();
    if (data.items && data.items.length > 0) {
        return {
            name: data.items[0].track.name,
            artist: data.items[0].track.artists.map(artist => artist.name).join(', '),
            link: data.items[0].track.external_urls.spotify,
            status: 'Recently Played'
        };
    }
    return null;
}

app.get('/spotify/current-track', async (req, res) => {
    try {
        const currentTrack = await getCurrentTrack();
        const trackInfo = currentTrack || await getLastPlayedTrack();
        res.json(trackInfo || { error: 'No tracks available' });
    } catch (error) {
        console.error('Failed to fetch Spotify data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// app.get('/api/temperature', async (req, res) => {
//     const url = `https://api.openweathermap.org/data/2.5/weather?lat=39.95&lon=-75.16&appid=${apiKey}`;
//     try {
//         const apiResponse = await fetch(url);
//         const apiData = await apiResponse.json();
//         const tempK = apiData.main.temp;
//         const tempC = tempK - 273.15;
//         const tempF = tempC * 9/5 + 32;
//         res.json({ celsius: tempC.toFixed(0), fahrenheit: tempF.toFixed(0) });
//     } catch (error) {
//         console.error("Failed to fetch temperature", error);
//         res.status(500).send("Failed to fetch temperature data");
//     }
// });

app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

