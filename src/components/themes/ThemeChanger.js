import React from "react";
import "~react-vis/dist/style";
import styled from "styled-components";


const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  color: ${props => props.textColor};
  background-color: ${props => props.background};
  padding: 1rem;
  text-align: center;
  font-family: sans-serif;
`;

export default withTheme;
