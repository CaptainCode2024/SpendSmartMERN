import React, { useMemo } from 'react';
import styled from 'styled-components';
import Orb from '../Orb/orb';
import Navigation from '../Navigation/Navigation';

const MainLayout = ({ active, setActive, children }) => {
  // Memoizing the Orb component
  const orbMemo = useMemo(() => <Orb />, []);

  return (
    <>
      {orbMemo}
      <MainLayoutStyled>
        <Navigation active={active} setActive={setActive} />
        <main>
          {children}
        </main>
      </MainLayoutStyled>
    </>
  );
};

const MainLayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: linear-gradient(135deg, #f0b3ff, #ff66b2, #ff6666); /* Updated gradient */
  border-radius: 20px;
  overflow-x: hidden;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1); /* Soft shadow for better depth */

  main {
    flex: 1;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.9); /* Slightly translucent white background */
    border-radius: 15px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05); /* Light shadow for inner content */
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default MainLayout;