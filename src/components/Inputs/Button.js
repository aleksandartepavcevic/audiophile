import React from "react";
import styled, { css } from "styled-components";

const Button = ({ value, ...rest }) => {
  return <StyledButton {...rest}>{value}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  padding: 0.9375rem 1.875rem;
  font-size: 0.8125rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.0625rem;
  border: none;
  cursor: pointer;

  ${({ primary }) =>
    primary &&
    css`
      background-color: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.white};
    `}

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${(props) => props.theme.colors.black};
      color: ${(props) => props.theme.colors.white};
    `}

  ${({ outlined }) =>
    outlined &&
    css`
      border: 0.0625rem solid ${(props) => props.theme.colors.black};
      background-color: transparent;
      color: ${(props) => props.theme.colors.black};
    `}
`;
