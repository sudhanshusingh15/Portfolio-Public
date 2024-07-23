import React, { useState, useEffect } from 'react';
import styled, {css} from "styled-components";
import { GridComponent } from "../gridComponent/index.jsx";
import { Button } from "../button/index.jsx";


const FooterContainer = styled.div`
    width: 70%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around; 
    margin-top: 5em;
    // border: 3px solid #FFC600;
    
    

    @media (max-width: 768px){
        width: 100%;
    }

    @media (min-width: 1440px) and (max-width: 1919px){
        width: 80%;
    }
    
`;

const TopTopContainer = styled.div`
    display: flex;
    width: auto;
    height: auto;
    flex-direction: row;
    
    justify-content: space-around;
    padding: 0 5em;
    // border: 2px solid blue;

    @media (max-width: 768px){
        padding: 0 0em;
        
    }
`;

const TopContainer = styled.div`
    display: flex;
    width: auto;
    height: auto;
    flex-direction: row;
   
    // border: 1px solid red;

`;

const BottomContainer = styled.div`
    height: 4.375em;
    justify-content: center;
    align-items: center;
    display: flex;
    border-top: 5px solid #FFC600;
`;

const ContentContainer = styled.div`
    // border: 1px solid green;
    display: flex;
    flex-direction: column;
    padding: 1em;

    ${props => css`
        width: ${props.width || "auto"};
        height: ${props.height || "100%"};
    `}

    ${props => props.button && css`
        justify-content: center;
        align-items: center;
    `}

    &:not(:last-of-type){
        margin-right: 5em;
    }

    @media only screen and (max-width: 768px) {
        &:not(:last-of-type){
            margin-right: 2em;
            margin-bottom: 2em;
        }
    }
`;

const PrivacyContainer = styled.div`
    display: flex;
    // border: 1px solid green;
    width: auto;
    text-align: center;
`;

const Title = styled.h2`
    font-family: amoera Regular;
    letter-spacing: 0.05em;
    margin: 0;
    margin-bottom: 1em;
    color: white;
    font-weight: 100;
    font-size: 2.1em;

    @media only screen and (max-width: 768px) {
        font-size: 1.5em;
    }

`;

const FLink = styled.a`
    font-family: VARUNA Regular;
    text-decoration: none;
    color: white;
    font-size: 1.2em;
    font-weight: 500;
    margin-bottom: 1em;

    ${props => props.button && css`
        padding: 0 0 2em 0;
    `}

    @media only screen and (max-width: 768px) {
        font-size: 1em;
    }

`;

const PrivacyText = styled.h4`
    color: white;
    font-weight: 400;
    font-family: "FuturaCnd", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;

`;
// margin-top: 5em;
// margin-right: 11em;

export function Footer(props){
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    console.log(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return(
        <FooterContainer>
            <TopTopContainer>
                <TopContainer>
                    <ContentContainer>
                        <Title>Contact</Title>
                        {/* <FLink href="mailto:sudhanshu.singh.1510@gmail.com" button>sudhanshu.singh.1510@gmail.com</FLink> */}
                        {/* <FLink href="mailto:sudhanshu.singh.1510@gmail.com" button>
                            {isMobile ? 'Email' : 'sudhanshu.singh.1510@gmail.com'}
                        </FLink> */}
                        {isMobile ?
                            <FLink href="mailto:sudhanshu.singh.1510@gmail.com" target="_blank">E-mail</FLink> :
                            <FLink href="mailto:sudhanshu.singh.1510@gmail.com" button>sudhanshu.singh.1510@gmail.com</FLink>
                        }
                        {/* <Button href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" /> */}
                        {isMobile ?
                            <FLink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">Surprise</FLink> :
                            <Button href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
                        }

                        {isMobile && <GridComponent />}
                        
                    </ContentContainer>
                    <ContentContainer>
                        <Title>Links</Title>
                        <FLink href="https://github.com/sudhanshusingh15" target="_blank" rel="noopener noreferrer">Github</FLink>
                        <FLink href="https://linkedin.com/in/sudhanshu--singh" target="_blank" rel="noopener noreferrer">LinkedIn</FLink>
                        <FLink href="https://profile.indeed.com/p/sudhanshus-kwcd01l" target="_blank" rel="noopener noreferrer">Indeed</FLink>
                        <FLink href="https://senior-project-drexel.web.app/projects/75" target="_blank" rel="noopener noreferrer">Senior Design Project</FLink>
                    </ContentContainer>
                    {/* <ContentContainer>
                        <GridComponent />
                    </ContentContainer> */}
                    {!isMobile && <ContentContainer>
                        <GridComponent />
                    </ContentContainer>}
                </TopContainer>
            </TopTopContainer>
            <BottomContainer>
                <PrivacyContainer>
                    <PrivacyText>© 2024 Sudhanshu Singh</PrivacyText>
                </PrivacyContainer>
            </BottomContainer>
        </FooterContainer>
    )
}