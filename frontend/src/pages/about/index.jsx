import React from "react";
import { useEffect, useState, useLayoutEffect } from "react";
import styled, { keyframes, css }from "styled-components";
import { Navbar } from "../../containers/navBar/index.jsx";
import { HelloWorld } from "../../containers/helloWorld/index.jsx";
import { Footer } from "../../containers/footer/index.jsx";

import Me from "../../../src/assets/images/about/me.JPG";
import Dukaan from "../../../src/assets/images/logo/dukaan.svg";
import WRB from "../../../src/assets/images/logo/WRB.svg";
import UPenn from "../../../src/assets/images/logo/UPenn.svg";
import GCI from "../../../src/assets/images/logo/GCI.png";
import Frame from "../../../src/assets/svg/frame.svg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCode, faGlobe, faPaintBrush, faTools} from '@fortawesome/free-solid-svg-icons';


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

const AboutContainer = styled.div`
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


const HelloWorldContainer = styled.div`
    width: 85%;
    height: 23em; 
    display: flex;
    justify-content: center; 
    flex-direction: column;
    border: 1px solid magenta;
    padding: 0 0 50px 0;
    position: relative;
    overflow: hidden;
    opacity: 0;

    ${props => props.isHelloWorldVisible && css`
        animation: ${slideDown} 1.5s ease forwards, fadeIn 0.5s ease forwards;
    `}

    @media only screen and (max-width: 768px) {
        width: 100%;
        padding: 0;
        margin-bottom: -9em;
    
    }
`;

const PhotoContainer = styled.div`
    position: relative;
    // border: 2px solid red;
    border-radius: 5em;
    overflow: hidden;
    margin-bottom: 1em;
    
    ${props => css`
        width: ${props.width || "25vw"};
        height: ${props.height || "62.5vh"};
        border-radius: ${props.borderRadius || "5em"};
    `}

    @media only screen and (max-width: 768px) {
        ${props => css`
        width: ${props.width || "90%"};
        height: ${props.height || "60vh"};
        border-radius: ${props.borderRadius || "2em"};
    `}
    }
`;

const Image = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-drag: none;

    ${props => css`
        object-fit: ${props.objectFit || "cover"};
    `}
`;


const IntroContainer = styled.div`
    display: flex;
    height: auto;
    flex-direction: row;
    padding: 3em;
    // border: 5px solid green;

    ${props => props.Blur && css`
        backdrop-filter: blur(18px);
        background-color: rgba(255, 255, 255, 0.05);
        -webkit-backdrop-filter: blur(18px);
        border-radius: 2em;
    `}

    ${props => props.isIntroContainerVisible && css`
        animation: ${slideDown} 1.5s ease forwards, fadeIn 0.5s ease forwards;
    `}

    ${props => css`
        padding-top: ${props.paddingTop || "3em"};
        width: ${props.width || "75%"};
        opacity: ${props.opacity || "1"};
        justify-content: ${props.justifyContent || "space-between"};
        align-items: ${props.alignItems || "start"};
    `}

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0;
        
        ${props => css`
        height: ${props.height || "auto"};
        width: ${props.width || "100%"};
        opacity: ${props.opacity || "1"};
    `}
    }

    @media only screen and (min-width: 1440px) and (max-width: 1919px) {
        ${props => css`
        width: ${props.mw1440width || "85%"};
        height: ${props.height || "auto"};
    `}
    }
`;

const LeftContainer = styled.div`
    display: flex;
    width: 40%;
    height: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // border: 3px solid turquoise;

    @media only screen and (max-width: 767px) {
        width: 100%;
    }

`;

const TextContainer = styled.div`
    display: flex;
    justify-content: center; 
    flex-direction: column;
    // border: 1px solid yellow;
    padding: 0 0 50px 0;
    position: relative;

    ${props => css`
        width: ${props.width || "85%"};
        height: ${props.height || "auto"};
    `}

    @media only screen and (max-width: 768px) {
        width: 90%;
        margin-top: 3.5em;
    }
`;

const Title = styled.h1`
    font-family: amoera Regular;
    font-feature-settings: "liga";
    font-weight: 700;
    color: white;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0
    letter-spacing: 0.3px;
    text-align: left;
    // border: 1px solid red;
    line-height: 1.2;
   
    ${props => css`
        font-size: ${props.fontSize || "10.625em"};
    `}

    @media only screen and (max-width: 768px) {
        font-size: 2em;
        line-height: 1.3;

        ${props => props.mw420Skills && css`
            text-align: center;
        `}
    }

    @media only screen and (min-width: 1440px) and (max-width: 1920px) {
        ${props => props.mw1440fontSize && css`
            font-size: ${props.mw1440fontSize || "5em"};
        `}
      }
`;

const Text = styled.p`
    font-family: VARUNA Regular;
    // letter-spacing: -0.3px;
    font-size: 1.3em;
    font-weight: 400;
    color: white;
    font-feature-settings: "liga";
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;    
    text-align: left;
    margin: 0;
    padding-top: .4em;
    line-height: 1.5;
   
    ${props => props.firstText && css`
        margin-top: -1.5em;
    `}

    @media only screen and (max-width: 768px) {
        font-size: 1em;

        ${props => props.mw420Skills && css`
            text-align: center;
        `}
    }
`;

const skillCategories = {
    programming: {
      icon: faCode,
      skills: [
        'Python',
        'Java',
        'C++',
        'C',
        'C#',
        'PHP',
        'Bash',
        'Racket',
        'Swift',
        'MATLAB',
        'Ladder Logic'

      ],
    },
    "web development": {
      icon: faGlobe,
      skills: [
        'HTML5',
        'CSS3',
        'React',
        'JavaScript',
        'Node.js',
        'Flask',
        'jQuery',
        'Bootstrap'
      ],
    },
    "tools & technologies": {
      icon: faTools,
      skills: [
        'AWS',
        'Git',
        'Jenkins',
        'Docker',
        'Firebase',
        'MongoDB',
        '.NET'
      ],
    },
    design: {
      icon: faPaintBrush,
      skills: [
        'Photoshop',
        'Illustrator',
        'Figma',
        'LATeX',
        'Sketch',
        'Adobe XD'
      ],
    },
};
  
const Wrapper = styled.section`
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
    padding: 16px 12px;
    margin-top: 24px;
    margin-bottom: 20px;
    backdrop-filter: blur(18px);
    background-color: rgba(255, 255, 255, 0.05);
    -webkit-backdrop-filter: blur(18px);

    // border: 1px solid white;

    @media (max-width: 767px) {
        margin: 0;
        padding: 0;
    }
    
`;
  
const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 80%;
    height: 100%;
    // border: 5px solid green;

    @media (max-width: 767px) {
        width: 100%;
        flex-direction: column;
        
        gap: 32px;
    }
`;

//   margin: auto;
  
const Header = styled.h2`
    font-family: amoera Regular;
    font-size: 5em;
    font-weight: 600;
    text-transform: uppercase;
    color: white;
    padding: 0 0 .2em 0;
    margin: 0;

    @media (max-width: 767px) {
        font-size: 3em;
    }
    
`;
  
  const TabsContainer = styled.ul`
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 20em;
    padding: 0;
    margin: 0 auto;
    // border: 2px solid red;

    @media (max-width: 768px) {
        width: 100%;
        height: 100%;
    
    }
`;
  
const Tab = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 24px;
    cursor: pointer;
    border-radius: 8px;
    transition: all 0.3s;
    background-color: #191970;
    color: white;
    transform: scale(1);
    font-family: amoera Regular;
    font-size: 1.325em;
    font-weight: 900;
    // border: 1px solid turquoise;
    letter-spacing: 0.5px;
    width: 100%;
    height: 70%;

    ${({ active }) =>
        active &&
        css`
        color: #5B18C2;
        background-color: #00FFD1;
        // background-color: rgba(106, 90, 205, 0.7)
        transform: scale(1.05);

        @media (max-width: 767px) {
            transform: scale(1.02);
        }
        
        `}

    // &:hover {
    //     // background-color: #333;
    //     background-color: rgba(106, 90, 205, 1)
    // }

    &:hover {
        // Only apply hover styles if not active
        ${({ active }) => !active && css`
            background-color: rgba(106, 90, 205, 1);
        `}
    }

    & .icon {
        margin-right: .75em;
    }

    @media (max-width: 767px) {
        font-size: 1.125em;
    }
`;

const SkillsList = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    // border: 1px solid yellow;
    width: 40%;
    margin: 0 auto;

    @media (max-width: 767px) {
        width: 100%;
    }
    
`;

const SkillsRow = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    padding: 0;
    margin: 0;
    
`;


const SkillItem = styled.li`
    display: flex;
    padding: 10px 10px;
    background-color: transparent;
    border: 2px solid #fff;
    border-radius: 5px;
    color: white;
    font-family: VARUNA Regular;
    font-size: 1.125em;
    
    width: fit-content;
    flex-direction: row;

    &:hover {
        border: 2px solid #f90000;
    }

    @media (max-width: 767px) {
        font-size: 1em;
    }

`;

const WorkSkillsRow = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    padding: 0; 
    margin-top: 1em;
    justify-content: center; 
    max-width: 80%; 

    @media (max-width: 767px) {
        width: 100%;
    }
`;

const WorkSkillItem = styled.li`
    display: flex;
    padding: 10px 10px;
    background-color: transparent;
    border: 2px solid #fff;
    border-radius: 5px;
    color: white;
    font-family: VARUNA Regular;
    font-size: 1.125em;
    
    width: fit-content;
    flex-direction: row;

    &:hover {
        border: 2px solid #f90000;
    }

    @media (max-width: 767px) {
        font-size: 1em;
    }
`;



export function About(props) {
    const [isHelloWorldVisible, setHelloWorldVisible] = useState(false);
    const [isIntroContainerVisible, setIntroContainerVisible] = useState(false);
    const [currentTab, setCurrentTab] = useState(Object.keys(skillCategories)[0]);
    

    useEffect(() => {
        const titleTimer = setTimeout(() => {
            setHelloWorldVisible(true);
        }, 500);

        return () => clearTimeout(titleTimer);
    }, []);

    useEffect(() => {
        if (isHelloWorldVisible) {
            const textTimer = setTimeout(() => {
                setIntroContainerVisible(true);
            }, 1000);

            return () => clearTimeout(textTimer);
        }
    }, [isHelloWorldVisible]);

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [temperatureC, setTemperatureC] = useState(null);
    const [temperatureF, setTemperatureF] = useState(null);

    // useEffect(() => {
    //     const fetchTemperature = async () => {
    //         try {
    //             const response = await fetch('/api/temperature');
    //             const data = await response.json();
    //             setTemperatureC(data.celsius);
    //             setTemperatureF(data.fahrenheit);
    //         } catch (error) {
    //             console.error("Failed to fetch temperature", error);
    //         }
    //     };
    
    //     fetchTemperature();
    // }, []);
    
//     useEffect(() => {
//     const fetchTemperature = async () => {
//         const apiKey = "ff35a1bb2aa89a8750c2b8f034408fb1";
//         const url = `https://api.openweathermap.org/data/2.5/weather?lat=39.95&lon=-75.16&appid=${apiKey}`;

//         try {
//             const response = await fetch(url);
//             const data = await response.json();
//             const tempK = data.main.temp; // temperature in Kelvin
//             if (tempK !== undefined) {
//                 const tempC = tempK - 273.15; // convert Kelvin to Celsius
//                 const tempF = tempC * (9/5) + 32; // convert Celsius to Fahrenheit
//                 setTemperatureC(tempC.toFixed(0));
//                 setTemperatureF(tempF.toFixed(0));
//             }
//         } catch (error) {
//             console.error("Failed to fetch temperature", error);
//         }
//     };

//     fetchTemperature();
// }, []);


    return (
        <AboutContainer>
            <Navbar />
            <HelloWorldContainer isHelloWorldVisible={isHelloWorldVisible}>
                <HelloWorld />
            </HelloWorldContainer>
            <IntroContainer width="85%" mw1440width="90%" justifyContent="space-around" paddingTop="3em" opacity="0" alignItems="center" isIntroContainerVisible={isIntroContainerVisible}>
                <PhotoContainer>
                    <Image src={Me} draggable="false" />
                </PhotoContainer>
                <TextContainer width="52%">
                    <Title fontSize="3.5em" mw1440fontSize="3em">I'm a <span>Software Engineer working from <span>{temperatureC ? `${temperatureC}° C / ${temperatureF}° F` : ""}</span> Philadelphia, PA.</span></Title>
                    <p>
                        <br />
                    </p>
                    <Text firstText>Throughout my professional journey, I've honed my skills in creating efficient automated test cases, boosting system performance, and enhancing user interface designs, leading to significant improvements such as increased test effectiveness, quicker web page rendering, and reduced system malfunctions.</Text>
                    <p>
                        <br />
                    </p>
                    <Text firstText>Having a passion for problem-solving and product development, I'm actively seeking opportunities to leverage my skills in a collaborative environment.</Text>
                </TextContainer>
            </IntroContainer>
            <p>
                <br />
            </p>
            <Title fontSize="5em" mw1440fontSize="3.775em">Work Experience</Title>
            <p>
                <br />
            </p>
            <IntroContainer className="Dukaan">
                <LeftContainer>
                    <PhotoContainer height="auto" borderRadius="0.5em">
                        <Image src={Dukaan} draggable="false" />
                    </PhotoContainer>
                    <WorkSkillsRow>
                        <WorkSkillItem>React Native</WorkSkillItem>
                        <WorkSkillItem>Node.js</WorkSkillItem>
                        <WorkSkillItem>JavaScript</WorkSkillItem>
                        <WorkSkillItem>Git</WorkSkillItem>
                        <WorkSkillItem>API</WorkSkillItem>
                        <WorkSkillItem>CI/CD</WorkSkillItem>
                        <WorkSkillItem>Firebase</WorkSkillItem>
                        <WorkSkillItem>Google Cloud</WorkSkillItem>
                        <WorkSkillItem>Figma</WorkSkillItem>
                    </WorkSkillsRow>
                </LeftContainer>
                <TextContainer width="60%">
                    <Title fontSize="3em">Full-Stack Engineer</Title>
                    <Title fontSize="1.5em">March 2023 - Present</Title>
                    <Title fontSize="1.5em">Philadelphia, PA</Title>
                    <p>
                        <br />
                    </p>
                    <Text firstText>– Created a mobile application using React Native and Node.js that provides features such as push notifications, real-time tracking, and expedited checkouts.</Text>
                    <p>
                        <br />
                    </p>
                    <Text firstText>– Integrated Stripe API for payments, and DoorDash Drive API for delivery, and architected backend for feature augmentation, resulting streamlined operational efficiency by 40% and increased payment processing speed by 35%.</Text>
                    <p>
                        <br />
                    </p>
                    <Text firstText>– Utilized Google Cloud and Firebase for secure authentication and enhanced data management efficiency.</Text>
                </TextContainer>
            </IntroContainer>
            <p>
                <br />
            </p>
            <IntroContainer Blur className="BTS">
                <LeftContainer>
                        <PhotoContainer height="auto" borderRadius="0.5em">
                            <Image src={WRB} draggable="false" />
                        </PhotoContainer>
                        <WorkSkillsRow>
                            <WorkSkillItem>Java</WorkSkillItem>
                            <WorkSkillItem>Jenkins</WorkSkillItem>
                            <WorkSkillItem>Katalon</WorkSkillItem>
                            <WorkSkillItem>Git</WorkSkillItem>
                            <WorkSkillItem>CI/CD</WorkSkillItem>
                            <WorkSkillItem>Linux</WorkSkillItem>
                        </WorkSkillsRow>
                </LeftContainer>
                <TextContainer width="60%">
                    <Title fontSize="3em">PM Analyst / QA Engineer</Title>
                    <Title fontSize="1.5em">Septemember 2021 - March 2022</Title>
                    <Title fontSize="1.5em">Wilmington, DE</Title>
                    <p>
                        <br />
                    </p>
                    <Text firstText>– Designed and implemented 100+ automated test cases using Java, ensuring thorough and efficient testing.</Text>
                    <p>
                        <br />
                    </p>
                    <Text firstText>– Executed automated testing utilizing Katalon and implemented continuous integration and delivery process using Jenkins and Git.</Text>
                    <p>
                        <br />
                    </p>
                    <Text firstText>– Refactored and optimized 70+ existing regression test cases, enhancing test effectiveness and increasing code maintainability.</Text>
                </TextContainer>
            </IntroContainer>
            <p>
                <br />
            </p>
            <IntroContainer className="UPenn">
                <LeftContainer>
                    <PhotoContainer height="auto" borderRadius="0.5em">
                        <Image src={UPenn} draggable="false" />
                    </PhotoContainer>
                    <WorkSkillsRow>
                        <WorkSkillItem>HTML5 & CSS3</WorkSkillItem>
                        <WorkSkillItem>AngularJS</WorkSkillItem>
                        <WorkSkillItem>JavaScript</WorkSkillItem>
                        <WorkSkillItem>SQL</WorkSkillItem>
                        <WorkSkillItem>Bash</WorkSkillItem>
                    </WorkSkillsRow>
                </LeftContainer>
                <TextContainer width="60%">
                    <Title fontSize="3em">Web Developer</Title>
                    <Title fontSize="1.5em">September 2020 - February 2021</Title>
                    <Title fontSize="1.5em">Philadelphia, PA</Title>
                    <p>
                        <br />
                    </p>
                    <Text firstText>– Maintained custom web backend and data access system using Bash, PHP, and MySQL, while enhancing public-facing demos through the design and development of prototypes using Figma.</Text>
                    <p>
                        <br />
                    </p>
                    <Text firstText>– Redesigned 70% of the Cognitive Computation group website’s frontend and added new features using HTML, CSS, JavaScript, and AngularJS.</Text>
                    <p>
                        <br />
                    </p>
                    <Text firstText>– Reduced time for web page rendering by 60%, and improved page loading time by 15%.</Text>
                </TextContainer>
            </IntroContainer>
            <p>
                <br />
            </p>
            <IntroContainer className="GCI">
                <LeftContainer>
                    <PhotoContainer height="auto" borderRadius="0.5em">
                        <Image src={GCI} draggable="false" />
                    </PhotoContainer>
                    <WorkSkillsRow>
                        <WorkSkillItem>PLC</WorkSkillItem>
                        <WorkSkillItem>C-More</WorkSkillItem>
                        <WorkSkillItem>Studio 5000</WorkSkillItem>
                        <WorkSkillItem>Ladder Logic</WorkSkillItem>
                        <WorkSkillItem>Node-RED</WorkSkillItem>
                    </WorkSkillsRow>
                </LeftContainer>
                <TextContainer width="60%">
                    <Title fontSize="3em">Project Engineer</Title>
                    <Title fontSize="1.5em">October 2019 - March 2020</Title>
                    <Title fontSize="1.5em">Bethlehem, PA</Title>
                    <p>
                        <br />
                    </p>
                    <Text firstText>– Created custom PLC programs for Allen-Bradley ControlLogix controllers for manufacturing and distribution industries using Studio 5000.</Text>
                    <Text fontSize="1.375em" fontWeight="400"></Text>
                    <p>
                        <br />
                    </p>
                    <Text firstText>– Designed and developed 100% custom client-based HMI screens using C-More.</Text>
                    <p>
                        <br />
                    </p>
                    <Text firstText>– Debugged process code and hardware issues within a timely manner, resulting in 65% decrease in malfunctions.</Text>
                </TextContainer>
            </IntroContainer>
            <p>
                <br />
            </p>
            <Wrapper>
                <ContentContainer>
                    <TabsContainer>
                        {Object.entries(skillCategories).map(([skillType, { icon, skills }]) => (
                            <Tab
                            key={skillType}
                            active={currentTab === skillType}
                            onClick={() => setCurrentTab(skillType)}
                            >
                            <span>
                                <FontAwesomeIcon icon={icon} className="icon" />
                                {skillType.toUpperCase()}
                            </span>
                            {currentTab === skillType && (
                                <FontAwesomeIcon icon={faArrowRight} />
                            )}
                            </Tab>
                        ))}
                    </TabsContainer>
                    <SkillsList>
                    <Header>Skills</Header>
                    <SkillsRow>
                        {skillCategories[currentTab].skills.map((skill) => (
                            <SkillItem key={skill}>{skill}</SkillItem>
                        ))}
                    </SkillsRow>
                    </SkillsList>
                </ContentContainer>
                </Wrapper>
            <Footer />
        </AboutContainer>);
}
