import styled from "styled-components";

export const Container = styled.div`
  padding: 0 10.3125rem;

  @media (max-width: 1024px) and (orientation: portrait) {
    padding: 0 2.5rem;
  }

  @media (max-width: 576px) and (orientation: portrait) {
    padding: 0 1.5rem;
  }
`;
