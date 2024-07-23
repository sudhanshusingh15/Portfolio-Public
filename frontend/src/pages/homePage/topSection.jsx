import React from "react";
import { useState, useEffect, useMemo } from "react";
import styled, { keyframes, css }from "styled-components";
import BackgroundAnimation from "../../containers/backgroundAnimation/index.jsx";
import { SpotifyButton } from "../../containers/spotifyButton/index.jsx";



const slideDown = keyframes`
  from {
    transform: translateY(-20%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const TopSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100vh;
    background: #111111;
    // border: 5px dotted blue;

    @media only screen and (max-width: 767px) {
        height: 100svh;
    }

    
`;

const TextContainer = styled.div`
    width: 100%;
    height: 80%; 
    display: flex;
    align-items: center; 
    justify-content: center; 
    flex-direction: column;
    // border: 1px solid red;
    padding: 0 0 50px 0;
    position: relative;
    z-index: 2;
    text-color: black;

    @media only screen and (max-width: 767px) {
        height: 80%;
        padding: 4.5em 0 0 0;
    }
`;

const Title = styled.h1`
    font-family: amoera Regular;
    font-feature-settings: "liga";
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    text-align: center;
    margin: 0; 
    padding: 0; 
    opacity: 0;

    ${props => props.isTitleVisible && css`
        animation: ${slideDown} 1.5s ease forwards, fadeIn 0.5s ease forwards;
    `}
   
    ${props => props.firstTitle && css`
        margin-top: 1em;
        margin-bottom: -0.15em;
    `}

    ${props => css`
        font-size: ${props.fontSize || "10.625em"};
        font-weight: ${props.fontWeight || "600"};
        color: ${props.color || "white"};
    `}

    @media only screen and (max-width: 767px) {

        ${props => css`
            width: 100%;
            font-size: ${props.fontSize || "4em"};
            font-weight: ${props.fontWeight || "600"};
            color: ${props.color || "white"};
        `}
    }

    @media only screen and (min-width: 1024px) and (max-width: 1440px) {

        ${props => props.firstTitle && css`
            margin-top: 1.3em;
            margin-bottom: -0.15em;
        `}

        ${props => css`
            font-size: ${props.fontSize || "8.625em"};
            font-weight: ${props.fontWeight || "600"};
            color: ${props.color || "white"};
        `}
    }
`;

// -webkit-text-stroke-width: 1px; \\for text border
// -webkit-text-stroke-color: red;

const Text = styled.p`
    font-family: 'VARUNA Regular';
    font-feature-settings: "liga";
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;    
    text-align: center;
    margin: 0;
    padding: 5px;
    opacity: 0;
    width: 40%;
    line-height: 1.7;
    
    ${props => props.isTextVisible && css`
        animation: ${slideDown} 1.5s ease forwards;
    `}

    ${props => props.firstText && css`
        margin-top: 0.7em;
    `}

    ${props => css`
        font-size: ${props.fontSize || "1.375em"};
        font-weight: ${props.fontWeight || "700"};
        color: ${props.color || "white"};
    `}

    @media only screen and (max-width: 767px) {
        ${props => css`
            font-size: ${props.fontSize || "1.1em"};
            font-weight: ${props.fontWeight || "700"};
            color: ${props.color || "white"};
            width: 100%;
        `}

        ${props => props.firstText && css`
            margin-top: 2em;
        `}

    }

    @media only screen and (min-width: 1024px) and (max-width: 1440px) {
        width: 50%;
    }
`;

// put the animation into the spotify button container when later created
const SpotifyContainer = styled.div`
    display: flex;
    width: 100%;
    height: 20%;
    z-index: 1;
    display: flex;
    justify-content: center;
    // border: 1px solid red;
    align-items: center;
    position: relative;
    opacity: 0;
    ${props => props.isSpotifyVisible && css`
        animation: ${slideDown} 1.5s ease forwards;
    `}

`;

export function TopSection(props) {
    const [isTitleVisible, setIsTitleVisible] = useState(false);
    const [isTextVisible, setIsTextVisible] = useState(false);
    const [isSpotifyVisible, setIsSpotifyVisible] = useState(false);
    const memoizedBackgroundAnimation = useMemo(() => <BackgroundAnimation />, []);

    useEffect(() => {
        const titleTimer = setTimeout(() => {
            setIsTitleVisible(true);
        }, 500);

        return () => clearTimeout(titleTimer);
    }, []);

    useEffect(() => {
        if (isTitleVisible) {
            const textTimer = setTimeout(() => {
                setIsTextVisible(true);
            }, 1000);

            return () => clearTimeout(textTimer);
        }
    }, [isTitleVisible]);

    useEffect(() => {
        if (isTextVisible) {
            const textTimer = setTimeout(() => {
                setIsSpotifyVisible(true);
            }, 1500);

            return () => clearTimeout(textTimer);
        }
    }, [isTextVisible]);


    return (
        <TopSectionContainer>
            {/* {memoizedBackgroundAnimation} */}
            <TextContainer>
                <Title firstTitle isTitleVisible={isTitleVisible}>Hello! I am</Title>
                <Title isTitleVisible={isTitleVisible}>Sudhanshu</Title>
                <Text firstText fontWeight="0" isTextVisible={isTextVisible}>I am passionate about merging technology and user-centric design to craft seamless and intuitive digital experiences</Text>
            </TextContainer>
            <SpotifyContainer isSpotifyVisible={isSpotifyVisible}>
                {/* <Text fontSize="1.375em" fontWeight="0" isTextVisible={isTextVisible}>Spotify button to put later</Text> */}
                <SpotifyButton />
            </SpotifyContainer>
        </TopSectionContainer>

    );
}


