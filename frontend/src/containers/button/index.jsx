import styled, { css } from "styled-components";
import React from "react";

const ButtonWrapper = styled.button`
  --offset: 10px;
  --border-size: 2px;
  display: block;
  position: relative;
  padding: 1.5em 3em;
  appearance: none;
  border: 0;
  background: transparent;
  color: #FFC600;
  // background: #fed;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  border-radius: 0;
  box-shadow: inset 0 0 0 var(--border-size) currentcolor;
  transition: background 0.8s ease;

  &:hover {
    background: rgba(100, 0, 0, 0.03);
  }
`;

const Text = styled.h3`
    color: white;
    font-family: "FuturaCnd", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 1.1em;
    font-weight: 500;

`;

const ButtonHorizontal = styled.div`
  position: absolute;
  --vertical-offset: calc(var(--offset) * -1);
  border-top: var(--border-size) solid currentcolor;
  border-bottom: var(--border-size) solid currentcolor;
  top: var(--horizontal-offset, 0);
  right: var(--vertical-offset, 0);
  bottom: var(--horizontal-offset, 0);
  left: var(--vertical-offset, 0);
  transition: transform 0.8s ease;
  will-change: transform;

  &:before {
    content: "";
    position: absolute;
    border: inherit;
    top: calc(var(--vertical-offset) - var(--border-size));
    bottom: calc(var(--vertical-offset) - var(--border-size));
    left: calc(var(--vertical-offset) * -1);
    right: calc(var(--vertical-offset) * -1);
  }

  ${ButtonWrapper}:hover & {
    transform: scaleX(0);
  }
`;

const ButtonVertical = styled.div`
  position: absolute;
  --horizontal-offset: calc(var(--offset) * -1);
  border-left: var(--border-size) solid currentcolor;
  border-right: var(--border-size) solid currentcolor;
  top: var(--horizontal-offset, 0);
  right: var(--vertical-offset, 0);
  bottom: var(--horizontal-offset, 0);
  left: var(--vertical-offset, 0);
  transition: transform 0.8s ease;
  will-change: transform;

  &:before {
    content: "";
    position: absolute;
    border: inherit;
    top: calc(var(--horizontal-offset) * -1);
    bottom: calc(var(--horizontal-offset) * -1);
    left: calc(var(--horizontal-offset) - var(--border-size));
    right: calc(var(--horizontal-offset) - var(--border-size));
  }

  ${ButtonWrapper}:hover & {
    transform: scaleY(0);
  }
`;

export function Button({href, children}) {

    const handleClick = () => {
        if(href) {
          window.open(href, '_blank', 'noopener,noreferrer');
        }
      };

  return (
    <ButtonWrapper onClick={handleClick}>
        {children}
        <Text>SURPRISE</Text>
      <ButtonHorizontal />
      <ButtonVertical />
    </ButtonWrapper>
  );
}