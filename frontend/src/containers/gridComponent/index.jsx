import * as React from "react";
import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { distance } from '@popmotion/popcorn';
import styled from 'styled-components';

const grid = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15]];

const Square = ({ active, setActive, colIndex, rowIndex, x, y, size, gap }) => {
    const isDragging = colIndex === active.col && rowIndex === active.row;
    const diagonalIndex = (360 / 6) * (colIndex + rowIndex);
    const d = distance(
      { x: active.col, y: active.row },
      { x: colIndex, y: rowIndex }
    );
    const springConfig = {
      stiffness: Math.max(700 - d * 120, 0),
      damping: 20 + d * 5
    };
    const dx = useSpring(x, springConfig);
    const dy = useSpring(y, springConfig);
  
    return (
        <motion.div
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
            dragElastic={1}
            onDragStart={() => setActive({ row: rowIndex, col: colIndex })}
            style={{
                background: `hsla(calc(var(--base-hue) + ${diagonalIndex}), 80%, 60%, 1)`,
                width: `${size}px`,
                height: `${size}px`,
                top: `${rowIndex * (size + gap)}px`,
                left: `${colIndex * (size + gap)}px`,
                position: 'absolute',
                borderRadius: '50%',
                x: isDragging ? x : dx,
                y: isDragging ? y : dy,
                zIndex: isDragging ? 1 : 0,
            }}
        />
    );
};

const AppContainer = styled.div`      
    width: 100%;
    height: 100%;
  
`;

const BaseHueContainer = styled(motion.div)`
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const GridContainer = styled(motion.div)`
    display: flex;
    width: ${({ size, gap }) => `${(size + gap) * 4}px`};
    height: ${({ size, gap }) => `${(size + gap) * 4}px`};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: relative;
    perspective: 500;

    @media only screen and (max-width: 425px) {
        top: 30%;
    }
    
`;

// const Name = styled(motion.div)`
//   color: white;
//   fontSize: "128px";
//   position: "absolute";
//   top: "50%";
//   left: "50%";
//   transform: "translate(-50%, -50%)";

// `;


export function GridComponent() {
    const [active, setActive] = useState({ row: 0, col: 0 });
    const [size, setSize] = useState(60);
    const [gap, setGap] = useState(10);
    const x = useMotionValue(0);
    const y = useMotionValue(0); 

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 768) {
                setSize(20);
                setGap(7);
            } else {
                setSize(60);
                setGap(10);
            }
        }

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <AppContainer>
            <BaseHueContainer
                animate={{ "--base-hue": 360 }}
                initial={{ "--base-hue": 0 }}
                transition={{ duration: 10, loop: Infinity, ease: "linear" }}
            >
                <GridContainer size={size} gap={gap}>
                    
                    {grid.map((row, rowIndex) =>
                        row.map((_, colIndex) => (
                            <Square
                                active={active}
                                setActive={setActive}
                                colIndex={colIndex}
                                rowIndex={rowIndex}
                                key={rowIndex + colIndex}
                                x={x}
                                y={y}
                                size={size}
                                gap={gap}
                            />
                        ))
                    )}
                </GridContainer>
            </BaseHueContainer>
        </AppContainer>
    );
}


