import React from "react";
import { useState, useEffect } from "react";
import styled, { keyframes, css }from "styled-components";
import { Meteors } from "./meteors";


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

const WorkContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    width: 100%;
    height: auto;
    border: 5px dotted blue;
    overflow: hidden;
    
    @media only screen and (max-width: 767px) {
        background: #111111;
    }
    
`;

const TextContainer = styled.div`
    width: 100%;
    height: auto; 
    display: flex;
    align-items: center; 
    justify-content: center; 
    flex-direction: column;
    border: 1px solid red;
    padding: 0 0 50px 0;
    position: relative;
    z-index: 2;
    text-color: black;
    
`;

const WorkDetailContainer = styled.div`
    width: 65%;
    height: auto; 
    display: flex;
    align-items: center; 
    justify-content: space-around; 
    flex-direction: row;
    border: 1px solid red;
    padding: 2em 0 1em 0;
    margin-bottom: 5em;
    position: relative;
    z-index: 2;
    margin-top: 1em;

    @media only screen and (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
        justify-content: start;
        margin: 3em 0 4em 0;
        padding: 0;
    }
    
`;

const IntroContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    border: 5px solid green;

    ${props => css`
        height: ${props.height || "75vh;"};
        width: ${props.width || "85%"};
    `}

    @media only screen and (max-width: 768px) {
        padding: 0.5em 0;
        align-items: flex-start;
        justify-content: start;
        
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
    border: 1px solid green;
    ${props => props.isTitleVisible && css`
        animation: ${slideDown} 1.5s ease forwards, fadeIn 0.5s ease forwards;
    `}
   
    ${props => props.firstTitle && css`
        margin-top: 0.90em;
        margin-bottom: -0.35em;
    `}

    ${props => css`
        font-size: ${props.fontSize || "10.625em"};
        font-weight: ${props.fontWeight || "600"};
        color: ${props.color || "white"};
        letter-spacing: ${props.letterSpacing || "0"};
    `}

    @media only screen and (max-width: 768px) {
        ${props => css`
            margin-top: ${props.mw425_margin_top || "0"};
        `}
        
    }   
`;

const Text = styled.p`
    font-family: VARUNA Regular;
    letter-spacing: 1px;
    font-feature-settings: "liga";
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;    
    text-align: center;
    padding: 5px;
    opacity: 0;
    ${props => props.isTextVisible && css`
        animation: ${slideDown} 1.5s ease forwards;
    `}

    ${props => props.firstText && css`
        margin-top: 0.7em;
    `}

    ${props => css`
        font-size: ${props.fontSize || "1.875em"};
        font-weight: ${props.fontWeight || "700"};
        color: ${props.color || "white"};
        margin: ${props.margin || "0"};
        left: ${props.left || "0"};
    `}
`;

export function WorkExpContainer(props) {
    const [TitlefontSize, setTitleFontSize] = useState({
        small: "1.625em",
        medium: "2em",
        large: "10.625em"
    });

    const [TextfontSize, setTextFontSize] = useState({
        default: "1.3em"
    });

    useEffect(() => {
        
        const handleResize = () => {
            console.log("Current width:", window.innerWidth);
            if (window.innerWidth <= 768) {
                console.log("Setting fontSize to smaller sizes");
                setTitleFontSize({
                    small: "1.625em",
                    medium: "1.75em",
                    large: "4em"
                });

                setTextFontSize({
                    default: "1em"
                });

            } else {
                console.log("Setting fontSize to default sizes");
                setTitleFontSize({
                    small: "1.625em",
                    medium: "2em",
                    large: "10.625em"
                });

                setTextFontSize({
                    default: "1.3em"
                });
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [isTitleVisible, setIsTitleVisible] = useState(false);
    const [isTextVisible, setIsTextVisible] = useState(false);
    const [isMeteorVisible, setIsMeteorVisible] = useState(false);

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
        const meteorTimer = setTimeout(() => {
            setIsMeteorVisible(true); 
        }, 2000);

        return () => clearTimeout(meteorTimer);
    }, [isTextVisible]);

    return (
        <WorkContainer>
            {isMeteorVisible && <Meteors />}
            <TextContainer>
                <Title fontSize={TitlefontSize.large} mw425_margin_top="2em" firstTitle letterSpacing="0" isTitleVisible={isTitleVisible}>{props.Title}</Title>
            </TextContainer>
            <WorkDetailContainer>
                <IntroContainer height="auto" width="auto">
                    <Title isTitleVisible={isTitleVisible} fontSize={TitlefontSize.medium}>Role</Title>
                    <Text isTextVisible={isTextVisible} fontSize={TextfontSize.default}>{props.Role}</Text>
                </IntroContainer>
                <IntroContainer height="auto" width="auto">
                    <Title isTitleVisible={isTitleVisible} fontSize={TitlefontSize.medium}>Timeline</Title>
                    <Text isTextVisible={isTextVisible} fontSize={TextfontSize.default}>{props.Timeline}</Text>
                </IntroContainer>
                <IntroContainer height="auto" width="auto">
                    <Title isTitleVisible={isTitleVisible} fontSize={TitlefontSize.medium}>Location</Title>
                    <Text isTextVisible={isTextVisible} fontSize={TextfontSize.default}>{props.Location}</Text>
                </IntroContainer>
            </WorkDetailContainer>
        </WorkContainer>
    );
}
