import React from 'react';

const ResearchSVG = ({
  fill = '#000000',
  width = '150px',
  height = '150px',
  stroke = '#ffffff',
  strokeWidth = '1.7' // Add a prop for stroke width
}) => (
  <svg
    fill={fill}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="icon line-color"
  >
    <g stroke="none" strokeWidth="0" />
    <g strokeLinecap="round" strokeLinejoin="round" stroke={stroke} strokeWidth="0.192" />
    <g>
      <path
        d="M17,12v5m-4,0V15M3,15l2.83-2.83M8,7a3,3,0,1,0,3,3A3,3,0,0,0,8,7Z"
        style={{ fill: "none", stroke, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth }}
      />
      <path
        d="M8,3H20a1,1,0,0,1,1,1V20a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V17"
        style={{ fill: "none", stroke, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth }}
      />
    </g>
  </svg>
);

export default ResearchSVG;
