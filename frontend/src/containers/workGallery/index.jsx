import React from 'react';
import styled, {css} from 'styled-components';
import { useNavigate } from "react-router-dom";

import Dukaan from "../../assets/images/logo/dukaan2.svg";
import ChaiMoh from "../../assets/images/logo/chaimoh.svg";
import Pathology from "../../assets/images/logo/pathology.svg";
import LiveFeed from "../../assets/images/logo/livefeed.svg";

const GalleryContainer = styled.div`
  display: flex;
  gap: 1em;
  max-width: 80rem;
  padding: 8rem 0;
`;

const Card = styled.figure`
  position: relative;
  margin: 0.3rem;
  width: 15rem;
  border-radius: 1.2rem;
  height: 25em;
  transition: 0.4s ease-in-out;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.3);
  flex: 0.25;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;


  &:hover {
    flex: 2;
    font-weight: bold;
    cursor: pointer;
    border-radius: 1rem;
  }

  &:hover img {
    position: relative;
    width: auto;
    height: 12em;
    transition: 0.4s ease-in-out;
    object-fit: scale-down;
  }

  img {
    position: relative;
    width: 25em;
    height: 5em;
    transition: 0.4s ease-in-out;
    object-fit: cover;    
  }

  ${props => css`
        background: ${props.background || "white"};
        border: ${props.border || "5px solid red"};
    `}
`;

export function WorkGallery(props){

  const navigate = useNavigate();

  return (
    <GalleryContainer>
      <Card background="#F7AA00" border="3px solid white" onClick={() => navigate("/work/dukaan")}> 
        <img
          src={Dukaan}
          alt="Dukaan"
          
        />
      </Card>
      <Card background="#000" border="3px solid #E98B10" onClick={() => navigate("/work/chaimoh")}>
        <img
          src={ChaiMoh}
          alt="ChaiMoh"
        />
      </Card>
      <Card background="linear-gradient(45deg, #00AAFF, #003366)" border="3px solid #FFC815" onClick={() => navigate("/work/digitalpathology")}>
        <img
          src={Pathology}
          alt="Digital Pathology"
        />
      </Card>
      <Card background="linear-gradient(45deg, #FFB0B0, #FFD8A9)" border="3px solid #F42222" onClick={() => navigate("/work/livefeed")}>
        <img
          src={LiveFeed}
          alt="Live Feed"
        />
      </Card>
    </GalleryContainer>            
  );
};
