import styled from "styled-components";
import { Container } from "../src/components/layouts/layouts";
import Button from "../src/components/Inputs/Button";

export default function Home() {
  return (
    <>
      <LandingSection>
        <Content>
          <Pre>New product</Pre>
          <Heading>XX99 Mark II Headphones</Heading>
          <Paragraph>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </Paragraph>
          <Button primary>See Product</Button>
        </Content>
      </LandingSection>
    </>
  );
}

const LandingSection = styled(Container)`
  position: relative;
  min-height: 45.5625rem;
  height: 100vh;
  background-color: #141414;
  background-image: url("/assets/home/hero.png");
  background-position: 0 30%;
  background-size: contain;
  background-repeat: no-repeat;

  @media (max-width: 1024px) and (orientation: portrait) {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: unset;
    height: 45.5625rem;
    background-image: url("/assets/home/hero-tablet.png");
    background-position: center center;
  }

  @media (max-width: 576px) and (orientation: portrait) {
    background-image: url("/assets/home/hero-mobile.png");
    height: 37.5rem;
    align-items: flex-end;
  }
`;

const Content = styled.div`
  padding-top: clamp(14.0625rem, 30.8642vh, 30.8642vh);

  @media (max-width: 1024px) and (orientation: portrait) {
    padding-top: unset;
    text-align: center;
  }

  @media (max-width: 576px) and (orientation: portrait) {
    padding-bottom: 7rem;
  }
`;

const Pre = styled.span`
  display: block;
  margin-bottom: 1.5rem;
  font-weight: 400;
  font-size: 0.875rem;
  letter-spacing: 0.625rem;
  color: ${(props) => props.theme.colors.white};
  text-transform: uppercase;
  opacity: 0.5;

  @media (max-width: 576px) and (orientation: portrait) {
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }
`;

const Heading = styled.h1`
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
`;

const Paragraph = styled.p`
  max-width: 21.8125rem;
  margin-top: 0;
  margin-bottom: 1.875rem;
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
