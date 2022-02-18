import React from "react";
import styled, { css } from "styled-components";

const Paragraph = ({ value, page, ...rest }) => {
  return (
    <StyledParagraph page={page} {...rest}>
      {value}
    </StyledParagraph>
  );
};

export default Paragraph;

const StyledParagraph = styled.p`
  margin-top: 0;
  font-size: 0.9375rem;
  font-weight: 500;
  line-height: 1.5625rem;
  opacity: 0.75;

  @media (max-width: 1024px) and (orientation: portrait) {
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 576px) and (orientation: portrait) {
    font-size: 0.9375rem;
    margin-bottom: 1.75rem;
  }

  ${({ white }) =>
    white &&
    css`
      color: ${(props) => props.theme.colors.white};
    `}

  ${({ gray }) =>
    gray &&
    css`
      color: ${(props) => props.theme.colors.black}80;
    `}

  ${({ about }) =>
    about &&
    css`
      max-width: 27.8125rem;

      @media (max-width: 1024px) and (orientation: portrait) {
        max-width: 45.75rem;
      }
    `}

  ${({ footer }) =>
    footer &&
    css`
      max-width: 33.75rem;

      @media (max-width: 1024px) and (orientation: portrait) {
        max-width: unset;
        margin: 0;
      }
    `}

  ${({ page }) => {
    if (page === "home") {
      return css`
        max-width: 21.8125rem;
        margin-bottom: 2.5rem;
      `;
    }
  }}
`;
