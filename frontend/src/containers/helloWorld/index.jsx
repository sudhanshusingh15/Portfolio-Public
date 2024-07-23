import React, { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';

const greetings = [
    { message: "Hello World!", color: "linear-gradient(45deg, #77FDFF, #FF0072)" },
    { message: "Ciao Mondo!", color: "linear-gradient(45deg, #ff5f6d, #ffc371)" },
    { message: "Привет, мир!", color: "linear-gradient(45deg, #43D681, #F0FF43)" },
    { message: "नमस्ते विश्व!", color: "linear-gradient(45deg, #FFFDE4, #005AA7)" },
    { message: "¡Hola Mundo!", color: "linear-gradient(45deg, #fc466b, #3f5efb)" },
    { message: "こんにちは世界！", color: "linear-gradient(45deg, #92FFF6, #FFA6FA)" }, 
    { message: "Bonjour le monde!", color: "linear-gradient(45deg, #BB96FE, #5B00FF)" }, 
    { message: "Hej Världen!", color: "linear-gradient(45deg, #DCF8C6, #00A79D)" },
    { message: "你好世界!", color: "linear-gradient(45deg, #88D3CE, #6E45E2)" },
    { message: "Olá Mundo!", color: "linear-gradient(45deg, #E8C3BA, #D6AE7B)" },
    { message: "Hallo Welt!", color: "linear-gradient(45deg, #24c6dc, #514a9d)" },
    { message: "안녕 세상!", color: "linear-gradient(90deg, #FFFF00, #FF3B00)" },
    { message: "مرحبا بالعالم", color: "linear-gradient(45deg, #808000, #F5F5DC)" }
  ];
 

const generateSlideInAnimation = () => {
    let keyframesString = `from { opacity: 0; transform: translateY(0%); }`;
    for (let i = 1; i <= 100; i++) {
      keyframesString += `${i}% { opacity: ${i / 100}; transform: translateY(0); }`;
    }
    keyframesString += `to { opacity: 1; transform: translateY(0); }`;
    return keyframes`${keyframesString}`;
  };
  
const slideInAnimation = generateSlideInAnimation();

const fadeOut = keyframes`

    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

const ConsoleWrapper = styled.div`
  text-align: center;
  border: 1px solid white;
`;

const GradientGreeting = styled.span`
  ${({ color }) => css`
    background: ${color};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-feature-settings: "liga";
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    display: inline-block;
    
    animation: ${slideInAnimation} 2.5s ease-out forwards, ${fadeOut} 2.5s ease-out 8.5s forwards;
  `}
`;
// animation: ${slideInAnimation} 2.5s ease-out forwards, fadeOut 2.5s ease-out 2.5s forwards;
// animation: ${fadeInUpAnimation} 2s ease-out forwards;

const StyledBody = styled.div`
  font-family: amoera Regular;
  letter-spacing: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white; 
  margin: 0;
  padding: 0;
  position: relative;

  ${props => props.firstTitle && css`
        margin-top: 0.90em;
        margin-bottom: -0.35em;
  `}

  ${props => css`
        font-size: ${props.fontSize || "9.625em"};
        font-weight: ${props.fontWeight || "600"};
        color: ${props.color || "white"};
  `}

  @media only screen and (max-width: 768px) {
    ${props => css`
        font-size: ${props.fontSize || "3em"};
        font-weight: ${props.fontWeight || "600"};
        color: ${props.color || "white"};

    `}

    ${props => props.firstTitle && css`
        margin-top: 0em;
        margin-bottom: 1em;
  `}
  }


  @media only screen and (min-width: 1440px) and (max-width: 1919px) {
    ${props => css`
        font-size: ${props.fontSize || "8.625em"};
        font-weight: ${props.fontWeight || "600"};
        color: ${props.color || "white"};
    `}
  }
`;

export function HelloWorld(props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 11000);

    return () => clearInterval(interval);
  }, []);

  return (
    <StyledBody firstTitle>
      <ConsoleWrapper>
        <GradientGreeting key={index} color={greetings[index].color}>
          {greetings[index].message}
        </GradientGreeting>
      </ConsoleWrapper>
    </StyledBody>
  );
};
