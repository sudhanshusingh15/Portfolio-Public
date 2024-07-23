import React, { useLayoutEffect, useState, useEffect } from 'react';
import styled, { keyframes, css }from "styled-components";
import { Navbar } from "../../../containers/navBar/index.jsx";
import { WorkExpContainer } from "../../../containers/workContainer/index.jsx";
import { WorkGallery } from "../../../containers/workGallery/index.jsx";
import { Footer } from "../../../containers/footer/index.jsx";

import DukaanPromo1 from "../../../assets/images/work/dukaan/dukaan-promo1.svg";
import DukaanPromo2 from "../../../assets/images/work/dukaan/dukaan-promo2.svg";
import DukaanProd1 from "../../../assets/images/work/dukaan/dukaan-prod1.svg";
import DukaanProd2 from "../../../assets/images/work/dukaan/dukaan-prod2.svg";
import DukaanProd3 from "../../../assets/images/work/dukaan/dukaan-prod3.svg";
import DukaanProd4 from "../../../assets/images/work/dukaan/dukaan-prod4.svg";
import DukaanShopify from "../../../assets/images/work/dukaan/dukaan-shopify.png";
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

const DukaanContainer = styled.div`
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
    // padding: 3em 0;
    border: 5px solid green;

    ${props => css`
        height: ${props.height || "auto"};
        width: ${props.width || "auto"};
    `}

    @media only screen and (max-width: 767px) {
        flex-direction: column;
        width: 90%;
        padding: 0;
    }

    @media only screen and (min-width: 1440px) {
        ${props => css`
            margin: ${props.mw1440_mw2550margin || "0"};
        `}
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

    @media only screen and (max-width: 767px) {
        ${props => css`
            width: ${props.mw425width || "100%"};
            height: ${props.mw425height || "100%"};
        `}
        margin: 2em 0;
    }

    @media only screen and (min-width: 1440px) and (max-width: 1919px) {
        ${props => css`
            width: ${props.mw1440_1919width || "25vw"};
            height: ${props.mw1440_1919height || "62.5vh"};
            margin: ${props.mw1440_1919margin || "3em"};
        `}
    }
`;



const Image = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: scale-down;

    @media only screen and (max-width: 767px) {
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

    @media only screen and (max-width: 767px) {
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

    @media only screen and (max-width: 767px) {
        font-size: 2em;
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
   
    ${props => props.firstText && css`
        margin-top: -1em;
    `}

    ${props => css`
        font-size: ${props.fontSize || "1.875em"};
        font-weight: ${props.fontWeight || "700"};
        color: ${props.color || "white"};
    `}

    @media only screen and (max-width: 767px) {
        font-size: 1em;
    }
`;


export function Dukaan(props) {
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
        <DukaanContainer>
            <Navbar />
            <WorkExpContainer Title="Dukaan" Role="Full-Stack Developer" Timeline="March 2022 - Present" Location="Philadelphia, PA, USA" />
            <TextContainer width="45%" opacity="0" isTextContainerVisible={isTextContainerVisible}>
                <Title fontSize="3.5em">Overview</Title>
                <Text fontSize="1.375em" fontWeight="400">2 international university students came across an idea to have go-to delivery service for ordering Indian snacks, meals and groceries for students across Philadelphia.</Text>
                <p>
                    
                </p>
                <Text fontSize="1.375em" fontWeight="400">Started as a hurried WhatsApp business back in 2022, we came up with a delivery app - since the relaunch, and our customers are coming back for the assurance of seamless deliveries and a wide catalog of Indian products available at Dukaan.</Text>
            </TextContainer>
            <IntroContainer>
                <PhotoContainer width="75vw" height="auto" mw425height="30svh" mw1440_1919width="85vw" mw1440_1919height="auto">
                    <Image mw425objectFit="cover" src={DukaanShopify} />
                </PhotoContainer>
            </IntroContainer>
            <TextContainer width="45%">
                <Title fontSize="3.5em">Tech Stack</Title>
                <Text fontSize="1.375em" fontWeight="400">With Shopify webstore in place, we went ahead and decided that it's finally time to build our own app and increase the customer retention rate. I, along with our team, created some high fidelity and came up with some solid designs for the app along with promotional ones all using Figma.</Text>
                <p>

                </p>
                <Text fontSize="1.375em" fontWeight="400">For the app, we used React Native for both iOS and Android platforms. Integrated Stripe API for payment systems and DoorDash Drive API for delivery, and real-time tracking. Not only this allowed streamline our operational efficiency by 40% but also increased our payment processing speed by 35%. We also used Firebase and Google Cloud for secure user-auth and data management.</Text>
            </TextContainer>
            <IntroContainer>
                <PhotoContainer width="auto" height="75vh" mw425width="70%" mw425height="auto" mw1440_1919width="auto" mw1440_1919height="85vh">
                    <Image src={DukaanPromo1} />
                </PhotoContainer>
                <PhotoContainer width="auto" height="75vh" mw425width="75%" mw425height="auto" mw1440_1919width="auto" mw1440_1919height="85vh">
                    <Image src={DukaanPromo2} />
                </PhotoContainer>
            </IntroContainer>
            <TextContainer width="45%">
                <Title fontSize="3.5em">Achievements</Title>
                <Text fontSize="1.375em" fontWeight="400">We launched the app in December 31st, 2023 and since then, there has been an +80% MoM increment in new users. Apart from that, we have received $10,000 by coming 2nd in Drexel Startup Fest. Our mission to deliver Indian snacks right at doorsteps in going strong across Phialdelphia reigon and are strongly expected to expand in other cities in the upcoming years.</Text>
            </TextContainer>
            <IntroContainer>
                <PhotoContainer width="auto" height="75vh" mw425width="65%" mw425height="auto" mw1440_1919width="auto" mw1440_1919height="85vh">
                    <Image mw425objectFit="cover" src={DukaanProd1} />
                </PhotoContainer>
                <PhotoContainer width="auto" height="75vh" mw425width="65%" mw425height="auto" mw1440_1919width="auto" mw1440_1919height="85vh">
                    <Image src={DukaanProd2} />
                </PhotoContainer>
            </IntroContainer>
            <IntroContainer mw1440_mw2550margin="-2em 0">
                <PhotoContainer width="auto" height="75vh" mw425width="65%" mw425height="auto" mw1440_1919width="auto" mw1440_1919height="85vh">
                    <Image src={DukaanProd3} />
                </PhotoContainer>
                <PhotoContainer width="auto" height="75vh" mw425width="65%" mw425height="auto" mw1440_1919width="auto" mw1440_1919height="85vh" >
                    <Image src={DukaanProd4} />
                </PhotoContainer>
            </IntroContainer>
            {/* <WorkGallery /> */}
            <Footer />
        </DukaanContainer>
    );
}