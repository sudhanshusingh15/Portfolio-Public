import styled, { keyframes, css } from "styled-components";
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import SpotifyLogo from "../../assets/images/logo/Spotify.svg";

const scrollAnimation = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(-100%); }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;


const SpotifyButtonContainer = styled.div`
    display: flex;
    width: 23.5%;
    height: 55%;
    max-height: 8.5em;
    // border: 1px solid orange;
    border-radius: 2em;
    background-color: rgba(106, 90, 205, 0.7);
    
    @media only screen and (max-width: 768px) {
        width: 70%;
        height: 50%;
    }
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    // border: 1px solid red;
    overflow: hidden;

    ${props => css`
        width: ${props.width || "100%"};
        height: ${props.height || "100%"};
        padding: ${props.padding || "0"};
    `}
`;

const UpperContainer = styled.div`
    display: flex;
    width: auto;
    height: 50%;
    justify-content: start;
    align-items: center;
    text-align: left;
    padding-top: 4%;
    // border: 1px solid purple;
`;

const LowerContainer = styled.div`
    display: flex;
    width: auto;
    height: 50%;
    justify-content: start;
    align-items: center;
    text-align: left;
    padding-bottom: 4%;
    // border: 1px dotted red;
`;

const Text = styled.a`
    // border: 1px solid blue;
    font-family: "FuturaCnd", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    white-space: nowrap;
    text-decoration: none; // Removes underline from links
    ${(props) => props.shouldScroll && css`animation: ${scrollAnimation} 15s linear infinite;`}
    ${props => css`
        color: ${props.color || "black"};
        font-weight: ${props.fontWeight || "500"};
    `}

    &:hover { animation-play-state: paused; }
`;

const SpotifyLogoContainer = styled.div`
    position: relative;
    // border: 1px solid green;
    width: auto;
    height: auto;
    overflow: hidden;
`;

const Image = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    animation: ${props => props.isSpinning ? css`${rotate} 4s linear infinite` : 'none'};
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-drag: none;
`;

export function SpotifyButton(props) {
    const [trackInfo, setTrackInfo] = useState({ status: 'Loading...', name: 'Loading...', link: '#' });
    const [shouldScroll, setShouldScroll] = useState(false);
    const textRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        async function fetchTrackInfo() {
            try {
                const response = await fetch('http://localhost:3001/spotify/current-track');
                const data = await response.json();
                if (data) {
                    setTrackInfo({
                        status: data.status,
                        name: `${data.name} by ${data.artist}`,
                        link: data.link
                    });
                }
            } catch (error) {
                console.error('Failed to fetch song data:', error);
                setTrackInfo({ status: 'Error', name: 'Could not load the song', link: '#' });
            }
        }

        fetchTrackInfo();
    }, []); 

    useLayoutEffect(() => {
        const updateShouldScroll = () => {
            const textWidth = textRef.current ? textRef.current.offsetWidth : 0;
            const containerWidth = containerRef.current ? containerRef.current.offsetWidth : 0;
            setShouldScroll(textWidth > containerWidth);
        };

        updateShouldScroll();

        const resizeObserver = new ResizeObserver(entries => {
            updateShouldScroll();
        });

        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }
        if (textRef.current) {
            resizeObserver.observe(textRef.current);
        }

        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <SpotifyButtonContainer>
            <ContentContainer width="25%">
                <SpotifyLogoContainer>
                    <Image isSpinning={trackInfo.status === 'Currently Playing'} src={SpotifyLogo} alt="Spotify Logo" draggable="false" />
                </SpotifyLogoContainer>
            </ContentContainer>
            <ContentContainer padding=".4em 0" width="75%">
                <UpperContainer>
                    <Text color="#B0C4DE">{trackInfo.status}</Text>
                </UpperContainer>
                <LowerContainer ref={containerRef}>
                    <Text color="#E6E6FA" fontWeight="700" href={trackInfo.link} shouldScroll={shouldScroll} target="_blank" ref={textRef}>
                        {trackInfo.name}
                    </Text>
                </LowerContainer>
            </ContentContainer>
        </SpotifyButtonContainer>
    );
}
