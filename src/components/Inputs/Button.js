import React from "react";
import styled from "@emotion/styled";

const Button = React.forwardRef((props, ref) => {
  const { value, ...rest } = props;
  return (
    <StyledButton ref={ref} {...rest}>
      {value}
    </StyledButton>
  );
});

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
    `
      background-color: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.white};

      transition: background-color 0.2s ease-in-out;

      &:hover {
        background-color: ${(props) => props.theme.colors.primaryLight};
      }
    `}

  ${({ secondary }) =>
    secondary &&
    `
      background-color: ${(props) => props.theme.colors.black};
      color: ${(props) => props.theme.colors.white};

      transition: background-color 0.2s ease-in-out;

      &:hover {
        background-color: ${(props) => props.theme.colors.secondaryLight};
      }
    `}

  ${({ outlined }) =>
    outlined &&
    `
      border: 0.0625rem solid ${(props) => props.theme.colors.black};
      background-color: transparent;
      color: ${(props) => props.theme.colors.black};

      transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

      &:hover {
        color: ${(props) => props.theme.colors.white};
        background-color: ${(props) => props.theme.colors.black};
      }
    `}
`;
