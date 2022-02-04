import styled from "styled-components";
import { Container } from "../src/components/layouts/layouts";
import ButtonPrimary from "../src/components/Inputs/ButtonPrimary";

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
          <ButtonPrimary>See Product</ButtonPrimary>
        </Content>
      </LandingSection>
    </>
  );
}

const LandingSection = styled(Container)`
  position: relative;
  min-height: 45.5625rem;
  height: 100vh;
  background-image: url("/assets/home/hero.png");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Content = styled.div`
  padding-top: clamp(14.0625rem, 30.8642vh, 30.8642vh);
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
`;

const Heading = styled.h1`
  max-width: 24.75rem;
  margin: 0 0 1.5625rem 0;
  font-size: 3.5rem;
  line-height: 3.625rem;
  color: ${(props) => props.theme.colors.white};
  text-transform: uppercase;
  letter-spacing: 0.125rem;
`;

const Paragraph = styled.p`
  max-width: 21.8125rem;
  margin-bottom: 1.875rem;
  font-size: 0.9375rem;
  font-weight: 500;
  line-height: 1.5625rem;
  color: ${(props) => props.theme.colors.white};
  opacity: 0.75;
`;
