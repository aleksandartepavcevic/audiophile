import styled from "styled-components";
import { Container } from "../src/components/layouts/layouts";
import Button from "../src/components/Inputs/Button";
import Product from "../src/components/Product/Product";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Audiophile - Home</title>
      </Head>
      <LandingSection>
        <LandingContent>
          <Pre>New product</Pre>
          <Heading>XX99 Mark II Headphones</Heading>
          <Paragraph>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </Paragraph>
          <Button primary>See Product</Button>
        </LandingContent>
      </LandingSection>
      <Products>
        <Product
          name="Headphones"
          image="/assets/home/product-headphones.svg"
        />
        <Product name="Speakers" image="/assets/home/product-speakers.svg" />
        <Product name="Earphones" image="/assets/home/product-earphones.svg" />
      </Products>
      <Featured>
        <FeaturedProductOne>
          <FeaturedImage url="/assets/home/featured-zx9.svg" />
          <Rings />
          <ProductOneContent>
            <Heading>ZX9 SPEAKER</Heading>
            <Paragraph>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </Paragraph>
            <Button secondary>See Product</Button>
          </ProductOneContent>
        </FeaturedProductOne>
      </Featured>
    </>
  );
}

const LandingSection = styled(Container)`
  position: relative;
  min-height: 45.5625rem;
  height: 100vh;
  background-color: #141414;
  background-image: url("/assets/home/hero.svg");
  background-position: 0 30%;
  background-size: contain;
  background-repeat: no-repeat;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;

  @media (max-width: 1024px) and (orientation: portrait) {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: unset;
    height: 45.5625rem;
    background-image: url("/assets/home/hero-tablet.svg");
    background-position: center center;
  }

  @media (max-width: 576px) and (orientation: portrait) {
    background-image: url("/assets/home/hero-mobile.svg");
    background-size: cover;
    min-height: 37.5rem;
    max-height: 812px;
    height: 100vh;
  }
`;

const LandingContent = styled.div`
  padding-top: clamp(14.0625rem, 30.8642vh, 30.8642vh);

  @media (max-width: 1024px) and (orientation: portrait) {
    padding-top: unset;
    text-align: center;
  }

  @media (max-width: 576px) and (orientation: portrait) {
    padding-top: 4rem;
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

const Products = styled(Container)`
  display: flex;
  justify-content: space-between;
  margin-top: 12.5rem;

  @media (max-width: 1024px) and (orientation: portrait) {
    margin-top: 9.25rem;
  }

  @media (max-width: 576px) and (orientation: portrait) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Featured = styled(Container)`
  margin-top: 12.5rem;
`;

const FeaturedProductOne = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 35rem;
  padding: 0 5.9375rem 0 41.625rem;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 0.5rem;
  overflow: hidden;
`;

const FeaturedImage = styled.div`
  position: absolute;
  bottom: 0;
  left: 7.3125rem;
  z-index: 2;
  width: 25.625rem;
  height: 28.9125rem;
  background-image: url("${(props) => props.url}");
  background-repeat: no-repeat;
  background-size: contain;
`;

const Rings = styled.div`
  background-image: url("/assets/home/rings.svg");
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  top: -2.25rem;
  left: -9.3125rem;
  z-index: 1;
  width: 59rem;
  height: 59rem;
`;

const ProductOneContent = styled.div`
  position: relative;
  z-index: 3;
`;
