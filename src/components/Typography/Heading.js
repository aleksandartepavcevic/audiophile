import React from "react";
import styled, { css } from "styled-components";

const Heading = ({ value, as, page, children }) => {
  return (
    <StyledHeading as={as} page={page}>
      {value ?? children}
    </StyledHeading>
  );
};

export default Heading;

const StyledHeading = styled.h1`
  ${({ as }) => {
    if (as === "h1") {
      return css`
        max-width: 24.75rem;
        margin: 0 0 1.5625rem 0;
        font-size: 3.5rem;
        line-height: 3.625rem;
        color: ${(props) => props.theme.colors.white};
        text-transform: uppercase;
        letter-spacing: 0.125rem;

        @media (max-width: 576px) and (orientation: portrait) {
          font-size: 2.25rem;
          line-height: 2.5rem;
          margin-bottom: 1.5rem;
        }

        ${({ page }) =>
          page === "home" &&
          css`
            @media (max-width: 1024px) and (orientation: portrait) {
              max-width: 16.25rem;
              margin-left: auto;
              margin-right: auto;
            }

            @media (max-width: 576px) and (orientation: portrait) {
              max-width: 14.25rem;
            }
          `}
      `;
    } else if (as === "h2") {
      return css`
        font-size: 2.5rem;
        line-height: 2.75rem;
        letter-spacing: 0.0875rem;
        text-transform: uppercase;
        color: ${(props) => props.theme.colors.black};

        @media (max-width: 576px) and (orientation: portrait) {
          font-size: 1.75rem;
          line-height: 2.1875rem;
        }

        ${({ page }) =>
          page === "home" &&
          css`
            max-width: 27.8125rem;

            span {
              color: ${(props) => props.theme.colors.primary};
            }

            @media (max-width: 1024px) and (orientation: portrait) {
              max-width: 35.75rem;
              margin: 3.875rem auto 2rem;
            }

            @media (max-width: 576px) and (orientation: portrait) {
              margin-top: 2.5rem;
            }
          `}
      `;
    } else if (as === "h3") {
      return css`
        font-size: 1.75rem;
        letter-spacing: 0.125rem;
        text-transform: uppercase;
        color: ${(props) => props.theme.colors.black};
        margin-top: 0;

        @media (max-width: 1024px) and (orientation: portrait) {
          margin-bottom: 2rem;
        }
      `;
    }
  }}
`;
