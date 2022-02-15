import React from "react";
import styled, { css } from "styled-components";

const Heading = ({ value, as, page }) => {
  return (
    <StyledHeading as={as} page={page}>
      {value}
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
