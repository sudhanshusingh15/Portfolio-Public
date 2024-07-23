import styled, { keyframes } from 'styled-components';

const meteorAnimation = keyframes`
  0% { transform: rotate(215deg) translateX(0); opacity: 1; }
  70% { opacity: 1; }
  100% { transform: rotate(215deg) translateX(-500px); opacity: 0; }
`;
const MeteorContainer = styled.div`
  position: absolute;
  display: flex;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  animation: ${meteorAnimation} ${props => props.duration}s linear infinite;
  animation-delay: ${props => props.delay}s;

  @media (max-width: 767px) { /* adjust the left position on mobile */
    left: ${props => props.left - 170}px; /* adjust the value to your liking */
    top: ${props => props.top + 10}px; /* adjust the value to your liking */
  }
`;

const MeteorHead = styled.div`
  width: 4px;
  height: 4px;
  background-color: white;
  border-radius: 100%;
  box-shadow: 0 0 10px 8px #ffffff20;
  z-index: 2; // Higher z-index to ensure it is above the tail
`;

const MeteorTail = styled.div`
  position: absolute;
  top: 50%;
  left: 2px;
  width: 70px;
  height: 4px;
  background: linear-gradient(to right, slategray, transparent);
  transform: translateY(-50%);
  z-index: 1; // Lower z-index to keep below the head
`;

export function Meteors() {
  const screenWidth = window.innerWidth;
  const number = screenWidth <= 768 ? 5 : 20;  
  const meteors = Array.from({ length: number }, (_, idx) => ({
      key: idx,
      top: -5,
      left: Math.floor(Math.random() * window.innerWidth),
      duration: Math.random() * 8 + 2,
      delay: Math.random() * 1 + 0.2,
  }));

  return (
    <>
      {meteors.map(meteor => (
        <MeteorContainer
          key={meteor.key}
          top={meteor.top}
          left={meteor.left}
          duration={meteor.duration}
          delay={meteor.delay}
        >
          <MeteorHead />
          <MeteorTail />
        </MeteorContainer>
      ))}
    </>
  ); 
}


