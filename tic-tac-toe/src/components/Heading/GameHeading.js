import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
  text-align: center;
  font-size: 48px;
  color: red; 
  margin-top: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const GameHeading = () => {
  return (
    <Heading>Tic Tac Toe Game</Heading>
  );
};

export default GameHeading;
