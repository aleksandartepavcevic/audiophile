import React from "react";
import styled from "styled-components";

const Paragraph = ({ value }) => {
  return <StyledParagraph>{value}</StyledParagraph>;
};

export default Paragraph;

const StyledParagraph = styled.p`
  max-width: 21.8125rem;
  margin-top: 0;
  margin-bottom: 2.5rem;
  font-size: 0.9375rem;
  font-weight: 500;
  line-height: 1.5625rem;
  color: ${(props) => props.theme.colors.white};
  opacity: 0.75;

  @media (max-width: 1024px) and (orientation: portrait) {
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 576px) and (orientation: portrait) {
    font-size: 0.9375rem;
    margin-bottom: 1.75rem;
  }
`;
