import React from "react";
import styled from "styled-components";

const ButtonPrimary = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default ButtonPrimary;

const StyledButton = styled.button`
  padding: 0.9375rem 1.875rem;
  font-size: 0.8125rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.0625rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border: none;
  cursor: pointer;
`;
