import React from "react";
import { useState, useEffect, useLayoutEffect} from "react";
import styled, {css }from "styled-components";
import { TopSection } from "./topSection";
import { Navbar } from "../../containers/navBar/index.jsx";
import { Footer } from "../../containers/footer/index.jsx";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faReact, faNode, faJs, faGit, faFigma, faAws} from '@fortawesome/free-brands-svg-icons';
import { faP, faL, faC, faMinus, faM, faO, faR, faE, faCloud} from '@fortawesome/free-solid-svg-icons';

import DukaanSVG from "../../assets//svg/delivery.svg";
import ChaiMohSVG from "../../assets/svg/datareport.svg";
import DPSVG from "../../assets/svg/medical.svg";
import LiveFeedSVG from "../../assets/svg/experiment.svg";
import Frame from "../../../src/assets/svg/frame.svg";

const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    width: 100%;
    height: auto;
    background: #000;
    scroll-behavior: smooth;

    @media only screen and (min-width: 1024px) {
        background: url(${Frame}) no-repeat center center fixed; 
        background-size: fill;
    }
`;

const Title = styled.h1`
    font-family: amoera Regular;
    font-feature-settings: "liga";
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    text-align: center;
    // border: 1px solid red;
   

    ${props => css`
        font-size: ${props.fontSize || "10.625em"};
        font-weight: ${props.fontWeight || "600"};
        color: ${props.color || "white"};
        padding: ${props.padding || "0.03em"};
    `}
`;

const Text = styled.p`
    font-family: 'VARUNA Regular';
    letter-spacing: -0.3px;
    font-feature-settings: "liga";
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;    
    text-align: center;
    margin: 0;

    ${props => css`
        font-size: ${props.fontSize || "1.875em"};
        font-weight: ${props.fontWeight || "700"};
        color: ${props.color || "white"};
        padding: ${props.padding || "5px"};
    `}
`;

const WorkContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    width: 85%;
    height: 75vh;
    
    // border: 5px solid green;

    @media only screen and (max-width: 767px) {
        display: flex;
        position: relative;
        flex-direction: column;
        width: 100%;
        height: auto;
        justify-content: center;
        align-items: center;
    }

    @media only screen and (min-width: 1024px) and (max-width: 1440px) {
        width: 90%;
    }
`;

const IndividualWorkContainer = styled.div`
    position: relative; 
    height: 62.5vh;
    cursor: pointer;
    // border: 2px solid green;
    border-radius: 2.5em;
    ${props => css`
        width: ${props.width || "50vw"};
    `}

    @media only screen and (max-width: 767px) {
        flex-direction: column;
        width: 90%;
        margin: 1em 0;
        border-radius: 1em;
        height: 50vh;
    }

    
`;

// const SvgIcon = styled.div`
//     position: absolute;
//     top: ${({ top }) => top || '50%'};
//     left: ${({ left }) => left || '50%'};
//     transform: translate(-50%, -45%) scale(1); 
//     opacity: 0; 
//     transition: opacity 0.3s ease, transform 0.3s ease;
//     z-index: 10; 
//     width: 10em;
//     height: 10em; 
    
// `;

const SVG = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
    // border: 1px solid yellow;
    object-fit: contain;
    transition: transform 0.3s ease;

    @media only screen and (max-width: 767px) {
        width: 100%;
    }
    
`;

const TopWorkContainer = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: 22%;
    // border: 2px solid blue;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media only screen and (max-width: 767px) {
        height: 33%;
        position: relative;
    }

`;

const BottomWorkContainer = styled.div`
    width: 100%;
    height: 78%;
    // border: 2px solid green;

    @media only screen and (max-width: 767px) {
        display: flex;
        height: 67%;
        justify-content: center;
        align-items: center;
    }

`;

const TopTopContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 65%;
    // border: 1px solid red;

`;

const TopBottomContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 35%;
    // border: 1px solid green;

`;

const Work = styled.div`
    display: flex;
    flex-direction: column;
    background: linear-gradient(
        180deg,
        rgba(${({ firstColor }) => firstColor || "255, 255, 255"}, ${({ firstOpacity }) => firstOpacity || 0.55}),
        rgba(${({ secondColor }) => secondColor || "255, 255, 255"}, ${({ secondOpacity }) => secondOpacity || 0.55})
      );
    border-radius: 2.5em; 
    transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease; 
    will-change: transform, box-shadow, background;
    overflow: hidden;

    ${props => css`
        width: ${props.width || "100%"};
        height: ${props.height || "100%"};
    `}

    &:hover {
        background: linear-gradient(
            180deg,
            rgba(${({ firstColor }) => `${firstColor || "255, 255, 255"}, 1`}),
            rgba(${({ secondColor }) => `${secondColor || "255, 255, 255"}, 1`})
          );
        transform: translateY(-5px); 
        box-shadow: -1px 10px 12px rgba(${({ firstColor }) => `${firstColor || "255, 255, 255"}, 1`});

        & > ${BottomWorkContainer} > ${SVG} {
            transform: translateY(10px);
        }
    }

    @media only screen and (max-width: 767px) {
        border-radius: 1em;
    }

`;

export function HomePage(props) {
    const [fontSize, setFontSize] = useState({
        small: "1.625em",
        medium: "2.75em",
        large: "4em"
    });
    const [iconSize, setIconSize] = useState({
        small: "xs",
        default: "1x"
    });

    useEffect(() => {
        const handleResize = () => {
            console.log("Current width:", window.innerWidth);

            if (window.innerWidth <= 767) {
                console.log("Setting fontSize to smaller sizes");
                setFontSize({
                    small: "1.625em",
                    medium: "2em",
                    large: "2.75em"
                });

                setIconSize({
                    small: "2xs",
                    default: "xs"
                });

            } else if (window.innerWidth >= 1440 && window.innerWidth <= 1919) {
                console.log("Setting fontSize to larger sizes");
                setFontSize({
                    small: "1.625em",
                    medium: "2.5em",
                    large: "3.5em"
                });
    
                setIconSize({
                    small: "xs",
                    default: "1x"
                });
    
            } else {
                console.log("Setting fontSize to default sizes");
                setFontSize({
                    small: "1.625em",
                    medium: "3em",
                    large: "4em"
                });

                setIconSize({
                    small: "xs",
                    default: "1x"
                });
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    } , []); 

    return (
        <HomePageContainer className="HomePageContainer">
           <Navbar />
            <TopSection />
            <Title fontSize={fontSize.large}>Latest Work</Title>
            <WorkContainer>
                <IndividualWorkContainer className="ChaiMoh" width="45%">
                    <a href="/work/chaimoh" style={{ display: "inherit", width: "100%", height: "100%", textDecoration: "none" }}>
                        <Work firstColor="233, 153, 34" secondColor="133, 0, 12" firstOpacity={0.9} secondOpacity={0.9}> 
                            <TopWorkContainer>
                                <TopTopContainer>
                                    <Title fontSize={fontSize.medium} color="white" padding="0">ChaiMoh</Title>
                                </TopTopContainer>
                                <TopBottomContainer>
                                    <Text padding=".5em"><FontAwesomeIcon icon={faReact} size={iconSize.default} /></Text>
                                    <Text padding=".5em"><FontAwesomeIcon icon={faNode} size={iconSize.default} /></Text>
                                    <Text padding=".5em"><FontAwesomeIcon icon={faJs} size={iconSize.default} /></Text>
                                    <Text padding=".5em"><FontAwesomeIcon icon={faGit} size={iconSize.default} /></Text>
                                    <Text padding=".5em"><FontAwesomeIcon icon={faFigma} size={iconSize.default} /></Text>
                                </TopBottomContainer>
                            </TopWorkContainer>
                            <BottomWorkContainer>
                                <SVG src={ChaiMohSVG} />
                            </BottomWorkContainer>
                        </Work>
                    </a>
                </IndividualWorkContainer>
                <IndividualWorkContainer className="Dukaan" width="45%">
                    <a href="/work/dukaan" style={{ display: "inherit", width: "100%", height: "100%", textDecoration: "none" }}>
                        <Work firstColor="187, 150, 254" secondColor="91, 0, 255" firstOpacity={0.9} secondOpacity={0.9}>
                            <TopWorkContainer>
                                <TopTopContainer>
                                    <Title fontSize={fontSize.medium} color="white" padding="0">Dukaan</Title>
                                </TopTopContainer>
                                <TopBottomContainer>
                                    <Text padding=".5em"><FontAwesomeIcon icon={faReact} size={iconSize.default} /></Text>
                                    <Text padding=".5em"><FontAwesomeIcon icon={faNode} ssize={iconSize.default} /></Text>
                                    <Text padding=".5em"><FontAwesomeIcon icon={faJs} size={iconSize.default} /></Text>
                                    <Text padding=".5em"><FontAwesomeIcon icon={faGit} size={iconSize.default} /></Text>
                                    <Text padding=".5em"><FontAwesomeIcon icon={faFigma} size={iconSize.default} /></Text>
                                    <Text padding=".5em"><FontAwesomeIcon icon={faCloud} size={iconSize.default} /></Text>
                                </TopBottomContainer>
                            </TopWorkContainer>
                            <BottomWorkContainer>
                                <SVG src={DukaanSVG} />
                            </BottomWorkContainer>
                        </Work>
                    </a>
                </IndividualWorkContainer>
            </WorkContainer>
            <WorkContainer>
                <IndividualWorkContainer className="DigitalPathology" width="45%">
                    <a href="/work/digitalpathology" style={{ display: "inherit", width: "100%", height: "100%", textDecoration: "none" }}>
                       <Work firstColor="146, 195, 106" secondColor="0, 167, 157" firstOpacity={0.9} secondOpacity={0.9}>
                            <TopWorkContainer>
                                <TopTopContainer>
                                    <Title fontSize={fontSize.medium} color="white" padding="0">Digital Pathology</Title>
                                </TopTopContainer>
                                <TopBottomContainer>
                                    <Text padding=".5em"><FontAwesomeIcon icon={faReact} size={iconSize.default} /></Text>
                                    <Text padding=".5em"><FontAwesomeIcon icon={faNode} size={iconSize.default} /></Text>
                                    <Text padding=".5em"><FontAwesomeIcon icon={faAws} size={iconSize.default} /></Text>
                                    <Text padding=".5em"><FontAwesomeIcon icon={faJs} size={iconSize.default} /></Text>
                                    <Text padding=".5em"><FontAwesomeIcon icon={faGit} size={iconSize.default} /></Text>
                                    <Text padding=".5em"><FontAwesomeIcon icon={faFigma} size={iconSize.default} /></Text>
                                </TopBottomContainer>
                            </TopWorkContainer>
                            <BottomWorkContainer>
                                <SVG src={DPSVG} />
                            </BottomWorkContainer>
                        </Work>
                    </a>
                </IndividualWorkContainer>
                <IndividualWorkContainer className="LiveFeed" width="45%">
                    <a href="/work/livefeed" style={{ display: "inherit", width: "100%", height: "100%", textDecoration: "none" }}>
                        <Work firstColor="36, 198, 220" secondColor="81, 74, 157" firstOpacity={0.9} secondOpacity={0.9}>
                            <TopWorkContainer>
                                <TopTopContainer>
                                    <Title fontSize={fontSize.medium} color="white" padding="0">LiveFeed</Title>
                                </TopTopContainer>
                                <TopBottomContainer>
                                    <Text padding="0.05em"><FontAwesomeIcon icon={faP} size={iconSize.small} /></Text>
                                    <Text padding="0.05em"><FontAwesomeIcon icon={faL} size={iconSize.small} /></Text>
                                    <Text padding="0 0.5em 0 0"><FontAwesomeIcon icon={faC} size={iconSize.small} /></Text>
                                    <Text padding="0.05em"><FontAwesomeIcon icon={faC} size={iconSize.small} /></Text>
                                    <Text padding="0.05em"><FontAwesomeIcon icon={faMinus} size={iconSize.small} /></Text>
                                    <Text padding="0.05em"><FontAwesomeIcon icon={faM} size={iconSize.small} /></Text>
                                    <Text padding="0.05em"><FontAwesomeIcon icon={faO} size={iconSize.small} /></Text>
                                    <Text padding="0.05em"><FontAwesomeIcon icon={faR} size={iconSize.small} /></Text>
                                    <Text padding="0 0.5em 0 0.05em"><FontAwesomeIcon icon={faE} size={iconSize.small} /></Text>
                                    <Text padding="0.5em"><FontAwesomeIcon icon={faJs} size={iconSize.default} /></Text>
                                    <Text padding="0.5em"><FontAwesomeIcon icon={faNode} size={iconSize.default} /></Text>
                                </TopBottomContainer>
                            </TopWorkContainer>
                            <BottomWorkContainer>
                                <SVG src={LiveFeedSVG} />
                            </BottomWorkContainer>
                        </Work>
                    </a>
                </IndividualWorkContainer>
            </WorkContainer>
            <Footer />
        </HomePageContainer>
    );
}