import React, { useLayoutEffect, useState, useEffect } from 'react';
import styled, { keyframes, css }from "styled-components";
import { Navbar } from "../../../containers/navBar/index.jsx";
import { WorkExpContainer } from "../../../containers/workContainer/index.jsx";
import { WorkGallery } from "../../../containers/workGallery/index.jsx";
import { Footer } from "../../../containers/footer/index.jsx";

import Soxhlet from "../../../assets/images/work/livefeed/soxhlet.png";
import NodeRed from "../../../assets/images/work/livefeed/nodered.jpeg";
import Frame from "../../../assets/svg/frame.svg";

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

const LiveFeedContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    width: 100%;
    height: auto;
    background: #000;

    @media only screen and (min-width: 1024px) {
        background: url(${Frame}) no-repeat center center fixed; 
        background-size: fill;
    }
`;

const IntroContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    padding: 3em 0;
    border: 5px solid green;

    ${props => css`
        height: ${props.height || "auto"};
        width: ${props.width || "auto"};
    `}

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        width: 90%;
        padding: 0;
    }

`;

const PhotoContainer = styled.div`
    position: relative;
    border: 2px solid red;
    border-radius: 1em;
    margin: 3em;
    overflow: hidden;

    ${props => css`
        width: ${props.width || "25vw"};
        height: ${props.height || "62.5vh"};
    `}

    @media only screen and (max-width: 768px) {
        ${props => css`
            width: ${props.mw425width || "100%"};
            height: ${props.mw425height || "100%"};
        `}
        margin: 2em 0;
    }
`;

const Image = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: scale-down;

    @media only screen and (max-width: 768px) {
        ${props => css`
            object-fit: ${props.mw425objectFit || "scale-down"};
        `}
    }
    
`;

const TextContainer = styled.div`
    display: flex;
    justify-content: center; 
    flex-direction: column;
    border: 1px solid yellow;
    padding: 0 0 50px 0;
    position: relative;

    ${props => props.isTextContainerVisible && css`
        animation: ${slideDown} 1.5s ease forwards, fadeIn 0.5s ease forwards;
    `}

    ${props => css`
        width: ${props.width || "85%"};
        height: ${props.height || "auto"};
        opacity: ${props.opacity || "1"};
    `}

    @media only screen and (max-width: 768px) {
        width: 85%;
        padding: 0;
    }
`;

const Title = styled.h1`
    font-family: amoera Regular;
    font-feature-settings: "liga";
    font-weight: 700;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    margin: 0.4em 0;
    padding: 0;
    text-align: left;
    border: 1px solid red;
   
    ${props => css`
        font-size: ${props.fontSize || "10.625em"};
        color: ${props.color || "white"};
    `}

    @media only screen and (max-width: 768px) {
        font-size: 2em;
    }
`;

const Text = styled.p`
    font-family: VARUNA Regular;
    // letter-spacing: .3px;
    font-feature-settings: "liga";
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding-top: .5em;
    line-height: 1.5;
   
    ${props => props.firstText && css`
        margin-top: -1em;
    `}

    ${props => css`
        font-size: ${props.fontSize || "1.875em"};
        font-weight: ${props.fontWeight || "700"};
        color: ${props.color || "white"};
        text-align: ${props.textAlign || "left"};
    `}

    @media only screen and (max-width: 768px) {
        font-size: 1em;
    }
`;


export function LiveFeed(props) {
    const [isTextContainerVisible, setTextContainerVisible] = useState(false);

    useEffect(() => {
        const titleTimer = setTimeout(() => {
            setTextContainerVisible(true);
        }, 1500);

        return () => clearTimeout(titleTimer);
    }, []);

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    } ,[]);

    return (
        <LiveFeedContainer>
            <Navbar />
            <WorkExpContainer Title="Live Feed" Role="Automation Engineer" Timeline="October 2019 - March 2020" Location="Bethlehem, PA, USA" />
            <TextContainer width="45%" opacity="0" isTextContainerVisible={isTextContainerVisible}>
                <Title fontSize="3.5em">Overview</Title>
                <Text fontSize="1.375em" fontWeight="400">The Reflux Dialysis Live Feed project was designed to extract critical parametric values from the Soxhlet Dialysis system. This effort utilized advanced programming tools such as Studio 5000 and KepServerEX v6.</Text>
                <p>

                </p>
                <Text fontSize="1.375em" fontWeight="400">In overview, the PLC (Programmable Logic Controller), in this case - Allen Bradley ControlLogix, implemented in the system would keep track of live parameters in it's memory and the Live Feed would extract those parameters from the PLC to display critical live information such as Vapor Temperature, Liquid Temperature, Flow Rate, etc. in real-time to facilitate more informed critical decision-making.</Text>
            </TextContainer>
            <IntroContainer>
                <PhotoContainer width="auto" height="95vh" mw425width="85%">
                    <Image src={Soxhlet} />
                </PhotoContainer>
            </IntroContainer>
            <TextContainer width="45%">
                <Title fontSize="3.5em">Usage</Title>
                <Text fontSize="1.375em" fontWeight="400">The project's main task to provide a real-time monitoring feed was accomplished through the use of Node-RED and JavaScript. Node-RED provided the abstraction of these parameters from the PLC and scripts written in JavaScript helped introduce multiple numeric and graphical indicators for the Live Feed, providing detailed, real-time data visualization. This approach not only enhanced the usability of the monitoring system but also significantly increased the depth of information available to professionals.</Text>
            </TextContainer>
            <IntroContainer>
                <PhotoContainer width="75vw" height="auto" mw425height="30svh">
                    <Image mw425objectFit="cover" src={NodeRed} />
                </PhotoContainer>
            </IntroContainer>
            <TextContainer width="70%">
                <Text fontSize="1.2em" fontWeight="400" textAlign="center" >NOTE: Above image is just an example implementation as I am not allowed to post anything related to this project :(</Text>
            </TextContainer>
            {/* <WorkGallery /> */}
            <Footer />
        </LiveFeedContainer>
    );
}