import React from "react";
import styled, { css } from "styled-components";

const Button = ({ children, primary }) => {
  return <StyledButton primary={primary}>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  ${({ primary }) =>
    primary &&
    css`
      padding: 0.9375rem 1.875rem;
      font-size: 0.8125rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.0625rem;
      background-color: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.white};
      border: none;
      cursor: pointer;
    `}
`;
