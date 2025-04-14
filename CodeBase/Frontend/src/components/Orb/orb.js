import React, { useMemo } from 'react';
import styled, { keyframes } from 'styled-components';
import { useWindowSize } from '../../utils/useWindowSize';

function Orb() {
  const { width, height } = useWindowSize();

  // Memoize animation to avoid regenerating on every render
  const moveOrb = useMemo(() => keyframes`
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(${width * 0.5}px, ${height * 0.25}px);
    }
    100% {
      transform: translate(0, 0);
    }
  `, [width, height]);

  const OrbStyled = useMemo(() => styled.div`
    width: 70vh;
    height: 70vh;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background: linear-gradient(180deg, #F56692 0%, #F2994A 100%);
    filter: blur(230px);
    opacity: 0.6;
    z-index: -1;
    animation: ${moveOrb} 16s ease-in-out infinite;
  `, [moveOrb]);

  return <OrbStyled />;
}

export default Orb;
