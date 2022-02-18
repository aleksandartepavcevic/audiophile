import styled from "styled-components";
import { Container } from "../src/components/layouts/layouts";
import Button from "../src/components/Inputs/Button";
import Product from "../src/components/Product/Product";
import Head from "next/head";
import Heading from "../src/components/Typography/Heading";
import Paragraph from "../src/components/Typography/Paragraph";
import Pre from "../src/components/Typography/Pre";

export default function Home() {
  return (
    <>
      <Head>
        <title>Audiophile - Home</title>
      </Head>
      <LandingSection>
        <LandingContent>
          <Pre value="New product" />
          <Heading as="h1" value="XX99 Mark II Headphones" />
          <Paragraph
            page="home"
            white
            value="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
          />
          <Button primary value="See Product" />
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
          <FeaturedImageOne url="/assets/home/featured-zx9.svg" />
          <Rings />
          <ProductOneContent>
            <Heading page="home" as="h1" value="ZX9 SPEAKER" />
            <Paragraph
              page="home"
              white
              value="Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."
            />
            <Button secondary value="See Product" />
          </ProductOneContent>
        </FeaturedProductOne>
        <FeaturedProductTwo>
          <FeaturedTwoContent>
            <Heading page="home" as="h3" value="ZX7 SPEAKER" />
            <Button outlined value="See Product" />
          </FeaturedTwoContent>
        </FeaturedProductTwo>
        <FeaturedProductThree>
          <ProductImage />
          <ProductInfo>
            <FeaturedThreeContent>
              <Heading page="home" as="h3" value="YX1 EARPHONES" />
              <Button outlined value="See Product" />
            </FeaturedThreeContent>
          </ProductInfo>
        </FeaturedProductThree>
      </Featured>
      <About>
        <AboutContent>
          <Heading page="home" as="h2">
            Bringing you the <span>best</span> audio gear
          </Heading>
          <Paragraph
            about
            gray
            value="Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment."
          />
        </AboutContent>
        <AboutImage />
      </About>
    </>
  );
}

const LandingSection = styled(Container)`
  position: relative;
  height: clamp(45.5625rem, 100vh, 67.5rem);
  background-color: #141414;
  background-image: url("/assets/home/hero.svg");
  background-position: 0 30%;
  background-size: contain;
  background-repeat: no-repeat;

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
    max-height: 920px;
    height: 100vh;
  }
`;

const LandingContent = styled.div`
  padding-top: clamp(14.0625rem, 30.8642vh, 22.0625rem);

  @media (max-width: 1024px) and (orientation: portrait) {
    padding-top: unset;
    text-align: center;
  }

  @media (max-width: 576px) and (orientation: portrait) {
    padding-top: 4rem;
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

  @media (max-width: 1024px) and (orientation: portrait) {
    margin-top: 6rem;
  }
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

  @media (max-width: 1024px) and (orientation: portrait) {
    height: 45rem;
    padding: 0;
    text-align: center;
    justify-content: center;
    align-items: flex-end;
  }

  @media (max-width: 576px) and (orientation: portrait) {
    padding: 0 1.5rem;
    height: 37.5rem;
  }
`;

const FeaturedImageOne = styled.div`
  position: absolute;
  bottom: 0;
  left: 7.3125rem;
  z-index: 2;
  width: 25.625rem;
  height: 28.9125rem;
  background-image: url("${(props) => props.url}");
  background-repeat: no-repeat;
  background-size: contain;

  @media (max-width: 1024px) and (orientation: portrait) {
    width: 12.3125rem;
    height: 14.8125rem;
    top: 3.25rem;
    left: 50%;
    bottom: unset;
    transform: translateX(-50%);
  }

  @media (max-width: 576px) and (orientation: portrait) {
    width: 10.75rem;
    height: 12.9375rem;
  }
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

  @media (max-width: 1024px) and (orientation: portrait) {
    top: -18rem;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: 576px) and (orientation: portrait) {
    width: 34.875rem;
    height: 34.875rem;
    top: -7.5625rem;
  }
`;

const ProductOneContent = styled.div`
  position: relative;
  z-index: 3;

  @media (max-width: 1024px) and (orientation: portrait) {
    padding-bottom: 4rem;
  }

  @media (max-width: 576px) and (orientation: portrait) {
    padding-bottom: 3.4375rem;
  }
`;

const FeaturedProductTwo = styled.div`
  height: 20rem;
  margin-top: 3rem;
  border-radius: 0.5rem;
  background-image: url("/assets/home/featured-zx7.svg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 1024px) and (orientation: portrait) {
    margin-top: 2.5rem;
  }

  @media (max-width: 576px) and (orientation: portrait) {
    margin-top: 1.5rem;
    background-image: url("/assets/home/featured-zx7-mobile.svg");
  }
`;

const FeaturedTwoContent = styled.div`
  padding-top: 6.25rem;
  padding-left: 5.9375rem;

  @media (max-width: 576px) and (orientation: portrait) {
    padding-left: 1.5rem;
  }
`;

const FeaturedProductThree = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3rem;

  @media (max-width: 1024px) and (orientation: portrait) {
    margin-top: 2.5rem;
  }

  @media (max-width: 576px) and (orientation: portrait) {
    flex-direction: column;
    margin-top: 1.5rem;
  }
`;

const ProductImage = styled.div`
  width: 33.75rem;
  height: 20rem;
  border-radius: 0.5rem;
  background-image: url("/assets/home/featured-yx1.svg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 1024px) and (orientation: portrait) {
    width: 28.25rem;
    height: 20rem;
  }

  @media (max-width: 576px) and (orientation: portrait) {
    width: 100%;
    height: 12.5rem;
  }
`;

const ProductInfo = styled.div`
  width: 33.75rem;
  height: 20rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors.gray};

  @media (max-width: 1024px) and (orientation: portrait) {
    width: 28.25rem;
    height: 20rem;
  }

  @media (max-width: 576px) and (orientation: portrait) {
    width: 100%;
    height: 12.5rem;
    margin-top: 1.5rem;
  }
`;

const FeaturedThreeContent = styled.div`
  padding-top: 6.25rem;
  padding-left: 5.9375rem;

  @media (max-width: 576px) and (orientation: portrait) {
    padding-top: 2.5rem;
    padding-left: 1.5rem;
  }
`;

const About = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12.5rem 0;

  @media (max-width: 1024px) and (orientation: portrait) {
    flex-direction: column-reverse;
    margin: 6rem 0;
  }

  @media (max-width: 576px) and (orientation: portrait) {
    margin: 7.5rem 0;
  }
`;

const AboutContent = styled.div`
  @media (max-width: 1024px) and (orientation: portrait) {
    text-align: center;
  }
`;

const AboutImage = styled.img`
  width: 33.75rem;
  height: 36.75rem;
  border-radius: 0.5rem;
  background-image: url("/assets/home/about-desktop.svg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 1024px) and (orientation: portrait) {
    width: 100%;
    height: 24.75rem;
    background-image: url("/assets/home/about-tablet.svg");
  }
`;
