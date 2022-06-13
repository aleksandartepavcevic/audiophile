import styled from "@emotion/styled";
import { motion } from "framer-motion";
import styles from "../styles/Home.module.scss";
import layout from "../styles/Layout.module.scss";

import { Container } from "../src/components/layouts/layouts";
import Button from "../src/components/Inputs/Button";
import Product from "../src/components/Product/Product";
import Head from "next/head";
import Heading from "../src/components/Typography/Heading";
import Paragraph from "../src/components/Typography/Paragraph";
import Pre from "../src/components/Typography/Pre";
import Loader from "../src/components/Loader/Loader";

const Home = ({ isInitial, route }) => {
  const container = {
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 2.15,
      },
    },
  };

  const item = {
    initial: {
      skewY: 3,
      y: 200,
      opacity: 0,
    },
    animate: {
      skewY: 0,
      y: 0,
      opacity: 1,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
      },
    },
  };

  const button = {
    initial: {
      scale: 0.8,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 0.8,
        delay: 3.6,
      },
    },
  };

  const products = {
    whileInView: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const productItem = {
    initial: {
      opacity: 0,
      y: 100,
    },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.68, -0.6, 0.32, 1.6],
      },
    },
  };

  return (
    <>
      <Loader pre={isInitial ? true : false} />
      <Head>
        <title>Audiophile - Home</title>
      </Head>
      <motion.div
        className={`${styles.section} ${layout.container}`}
        variants={container}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className={styles.content}>
          <Pre isMotion={true} variants={item} value="New product" />
          <Heading
            isMotion={true}
            variants={item}
            as="h1"
            value="XX99 Mark II Headphones"
          />
          <Paragraph
            isMotion={true}
            variants={item}
            page="home"
            color="white"
            value="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
          />
          <MotionButton variants={button} primary value="See Product" />
        </div>
      </motion.div>
      <MotionProducts
        variants={products}
        initial="initial"
        whileInView="whileInView"
        viewport={{
          once: true,
        }}
      >
        <MotionProduct
          variants={productItem}
          name="Headphones"
          image="/assets/home/product-headphones.svg"
          link="/headphones"
        />
        <MotionProduct
          variants={productItem}
          name="Speakers"
          image="/assets/home/product-speakers.svg"
          link="/speakers"
        />
        <MotionProduct
          variants={productItem}
          name="Earphones"
          image="/assets/home/product-earphones.svg"
          link="/earphones"
        />
      </MotionProducts>
      <Featured>
        <MotionFeaturedProductOne>
          <MotionFeaturedImageOne url="/assets/home/featured-zx9.svg" />
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
        </MotionFeaturedProductOne>
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
            variant="about"
            gray
            value="Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment."
          />
        </AboutContent>
        <AboutImage />
      </About>
    </>
  );
};

export default Home;

const MotionButton = motion(Button);

const MotionProducts = motion(styled(Container)`
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
`);

const MotionProduct = motion(Product);

const Featured = styled(Container)`
  margin-top: 12.5rem;

  @media (max-width: 1024px) and (orientation: portrait) {
    margin-top: 6rem;
  }
`;

const MotionFeaturedProductOne = motion(styled.div`
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
`);

const MotionFeaturedImageOne = motion(styled.div`
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
`);

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
