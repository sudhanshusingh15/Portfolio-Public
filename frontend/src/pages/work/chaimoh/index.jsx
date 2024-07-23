import React, { useLayoutEffect, useState, useEffect } from 'react';
import styled, { keyframes, css }from "styled-components";
import { Navbar } from "../../../containers/navBar/index.jsx";
import { WorkExpContainer } from "../../../containers/workContainer/index.jsx";
import { WorkGallery } from "../../../containers/workGallery/index.jsx";
import { Footer } from "../../../containers/footer/index.jsx";

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

const ChaiMohContainer = styled.div`
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


export function ChaiMoh(props) {
    const [isTextContainerVisible, setTextContainerVisible] = useState(false);

    useEffect(() => {
        const titleTimer = setTimeout(() => {
            setTextContainerVisible(true);
        }, 1500);

        return () => clearTimeout(titleTimer);
    }, []);

    
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <ChaiMohContainer>
            <Navbar />
            <WorkExpContainer Title="ChaiMoh" Role="Full-Stack Developer" Timeline="October 2023 - Present" Location="Philadelphia, PA, USA" />
            <TextContainer width="52%" opacity="0" isTextContainerVisible={isTextContainerVisible}>
                <Title fontSize="3.5em">Overview</Title>
                <Text fontSize="1.375em" fontWeight="400">ChaiMoh is a comprehensive sales and inventory management application designed to streamline the operations of businesses. Developed with React Native, the platform offers real-time sales charts, inventory updates, and the ability to generate monthly statements in PDF format. This significantly enhances operational efficiency and decision-making processes for its users, ensuring that businesses have the tools they need to succeed in a competitive market environment.</Text>
            </TextContainer>
            <IntroContainer>
                <PhotoContainer width="25vw" height="75vh">
                
                </PhotoContainer>
                <PhotoContainer width="25vw" height="75vh">
                
                </PhotoContainer>
            </IntroContainer>
            <TextContainer width="52%">
                <Title fontSize="3.5em">Technology & Security</Title>
                <Text fontSize="1.375em" fontWeight="400">At the heart of ChaiMoh's operations lies Firebase, utilized for its scalable, real-time database capabilities, enabling efficient management of items, sales records, and user profiles. Security is fortified through Firebase Authentication, providing robust user authentication and role-based access control. The integration of the PayTM API for digital payments and Firebase Analytics for sales trend analysis further empowers businesses with the tools needed for success in a digital economy. This combination of technologies ensures that ChaiMoh is not just a tool, but a comprehensive solution for business management and growth.</Text>
            </TextContainer>
            <IntroContainer>
                <PhotoContainer width="25vw" height="75vh">
                
                </PhotoContainer>
                <PhotoContainer width="25vw" height="75vh">
                
                </PhotoContainer>
            </IntroContainer>
            <TextContainer width="52%">
                <Title fontSize="3.5em">Impact & Utility</Title>
                <Text fontSize="1.375em" fontWeight="400">ChaiMoh not only enhances operational efficiency but also provides invaluable insights into sales trends and inventory levels, allowing businesses to make informed decisions. The application's user-friendly interface and the integration of advanced technological solutions such as Firebase Storage for file management underscore its commitment to addressing the dynamic needs of modern businesses. By offering a platform that is both powerful and easy to use, ChaiMoh helps businesses navigate the challenges of inventory and sales management.</Text>
            </TextContainer>
            {/* <WorkGallery /> */}
            <Footer />
        </ChaiMohContainer>
    );
}