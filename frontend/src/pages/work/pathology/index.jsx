import React, { useLayoutEffect, useState, useEffect } from 'react';
import styled, { keyframes, css }from "styled-components";
import { Navbar } from "../../../containers/navBar/index.jsx";
import { WorkExpContainer } from "../../../containers/workContainer/index.jsx";
import { WorkGallery } from "../../../containers/workGallery/index.jsx";
import { Footer } from "../../../containers/footer/index.jsx";

import FrontEnd from "../../../assets/images/work/pathology/frontend.png";
import TechStack from "../../../assets/images/work/pathology/techstack.svg";
import WSI1 from "../../../assets/images/work/pathology/wsi1.jpeg";
import WSI2 from "../../../assets/images/work/pathology/wsi2.jpeg";
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

const PathologyContainer = styled.div`
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
            height: ${props.mw425height || "auto"};
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
        font-size: 2.5em;
    }
`;

const Text = styled.p`
    font-family: VARUNA Regular;
    // letter-spacing: -0.3px;
    font-feature-settings: "liga";
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;    
    text-align: left;
    margin: 0;
    padding-top: .5em;
    line-height: 1.5;

    ${props => css`
        font-size: ${props.fontSize || "1.875em"};
        font-weight: ${props.fontWeight || "700"};
        color: ${props.color || "white"};
    `}

    @media only screen and (max-width: 768px) {
        font-size: 1em;
    }
`;


export function Pathology(props) {
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
        <PathologyContainer>
            <Navbar />
            <WorkExpContainer Title="Digital Pathology" Role="MLOps / Front-End" Timeline="October 2022 - June 2023" Location="Philadelphia, PA, USA" />
            <TextContainer width="45%" opacity="0" isTextContainerVisible={isTextContainerVisible}>
                <Title fontSize="3.5em">Overview</Title>
                <Text fontSize="1.375em" fontWeight="400">Digital Pathology was a senior design project that me along with 4 other friends worked on. It is a web application that let's user upload Whole Slide Images (WSI)- somewhere in the range of 10-25GB - to detect Sinusitis cells in the given WSI by using our ML model. This platform was created to empower pathologists, researchers to improve diagnostic precision and enhance patient care.</Text>
            </TextContainer>
            <IntroContainer>
                <PhotoContainer width="auto" height="95vh">
                    <Image src={TechStack} />
                </PhotoContainer>
            </IntroContainer>
            <TextContainer width="45%">
                <Title fontSize="3.5em">ML</Title>
                <Text fontSize="1.375em" fontWeight="400">The backend infrastructure leverages state-of-the-art machine learning algorithms, including convolutional neural networks (CNNs), to accurately analyze and classify sinusitis based on the provided whole slide images. To streamline the development and training of machine learning models, techniques, such as Felzenszwalb, Quickshift, and SLIC segmentation algorithms, are integrated into the system. These techniques identify regions of interest (ROIs) within the whole slide images, improving the precision and performance of the classification models.</Text>
                <p>

                </p>
                <Text fontSize="1.375em" fontWeight="400">Data acquisition and processing are seamlessly handled by the platform's Unified Image Reader (UIR). The UIR provides a unified interface for reading large-scale images by regions, facilitating efficient processing of massive image datasets that exceed memory limitations. The Custom Dataset (CD), an extension of PyTorch's Dataset, lies at the core of the system. CD incorporates advanced filtration algorithms and implements the Dark Region Mapping technique to handle dynamically sized datasets ensuring that only relevant regions pass through the filtration process, enhancing the efficiency and accuracy of subsequent analysis stages.</Text>
            </TextContainer>
            <IntroContainer>
                <PhotoContainer width="75vh" height="auto">
                    <Image src={WSI1} />
                </PhotoContainer>
                <PhotoContainer width="75vh" height="auto">
                    <Image src={WSI2} />
                </PhotoContainer>
            </IntroContainer>
            <TextContainer width="45%">
                <Title fontSize="3.5em">Front-End</Title>
                <Text fontSize="1.375em" fontWeight="400">After the backend, now it was time for a web application for user to sign in for secure user-auth and then upload WSI for analysis. The application is built on React, a robust framework for dynamic user interfaces, efficient rendering and state management. React offers flexibilty for future enhancements which allowed us to integrate filtration methods and optimize performance through local pre-processing of images.</Text>
            </TextContainer>
            <IntroContainer>
                <PhotoContainer width="75vw" height="95vh" mw425width="100%" mw425height="30svh">
                    <Image mw425objectFit="cover" src={FrontEnd} />
                </PhotoContainer>
            </IntroContainer>
            {/* <WorkGallery /> */}
            <Footer />
        </PathologyContainer>
    );
}