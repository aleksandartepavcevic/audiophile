import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Pre = React.forwardRef((props, ref) => {
  const { value, ...rest } = props;
  return (
    <StyledPre ref={ref} {...rest}>
      {value}
    </StyledPre>
  );
});

export default Pre;

const StyledPre = styled.span`
  display: block;
  margin-bottom: 1.5rem;
  font-weight: 400;
  font-size: 0.875rem;
  letter-spacing: 0.625rem;
  color: ${(props) => props.theme.colors.white}80;
  text-transform: uppercase;

  @media (max-width: 576px) and (orientation: portrait) {
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }
`;
