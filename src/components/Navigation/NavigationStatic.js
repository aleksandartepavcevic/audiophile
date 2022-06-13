import Link from "next/link";
import React from "react";
import styled, { css } from "@emotion/styled";
import { BsCart3 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { Container } from "../layouts/layouts";
import { useWindowSize } from "../../hooks/useWindowSize";
import { motion } from "framer-motion";

const NavigationStatic = () => {
  const size = useWindowSize();

  const navigation = {
    animate: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const links = {
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 1.65,
      },
    },
  };

  const logo = {
    initial: {
      x: -50,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
        delay: 1.4,
      },
    },
  };

  const link = {
    initial: {
      x: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
      },
    },
  };

  const cart = {
    initial: {
      x: -30,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
        delay: size.width < 576 ? 1.65 : 2.2,
      },
    },
  };

  const mobileMenu = {
    initial: {
      x: -30,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
        delay: 1.2,
      },
    },
  };

  return (
    <StyledContainer>
      <MotionContent>
        <MotionFlexContainer
          variants={navigation}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.div
            variants={mobileMenu}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <MenuIcon />
          </motion.div>
          {size.width > 1024 ||
          (size.width > 576 &&
            size.width <= 1024 &&
            size.orientation === "portrait") ? (
            <Link href="/" scroll={false}>
              <a>
                <MotionLogo variants={logo} src="/assets/navigation/logo.svg" />
              </a>
            </Link>
          ) : null}
          <MotionLinks
            variants={links}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Link href="/" scroll={false}>
              <motion.a variants={link}>Home</motion.a>
            </Link>
            <Link href="/headphones" scroll={false}>
              <motion.a variants={link}>Headphones</motion.a>
            </Link>
            <Link href="/speakers" scroll={false}>
              <motion.a variants={link}>Speakers</motion.a>
            </Link>
            <Link href="/earphones" scroll={false}>
              <motion.a variants={link}>Earphones</motion.a>
            </Link>
          </MotionLinks>
        </MotionFlexContainer>
        {size.width <= 576 && size.orientation === "portrait" ? (
          <Link href="/" scroll={false}>
            <MotionLogo
              variants={logo}
              initial="initial"
              animate="animate"
              exit="exit"
              src="/assets/navigation/logo.svg"
            />
          </Link>
        ) : null}
        <Link href="/cart">
          <motion.a
            variants={cart}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <CartIcon />
          </motion.a>
        </Link>
      </MotionContent>
    </StyledContainer>
  );
};

export default NavigationStatic;

const StyledContainer = styled(Container)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
`;

const MotionContent = motion(styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2rem;
  padding-bottom: 2rem;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 0.0625rem;
    background-color: ${(props) => props.theme.colors.white};
    opacity: 0.2;
  }

  @media (max-width: 576px) and (orientation: portrait) {
    &::after {
      left: -1.5rem;
      right: -1.5rem;
    }
  }
`);

const MotionFlexContainer = motion(styled.div`
  display: flex;
  align-items: center;
`);

const MotionLogo = motion(styled.img`
  width: 8.9375rem;
  height: 1.5625rem;
  object-fit: contain;
`);

const MotionLinks = motion(styled.div`
  display: flex;
  margin-left: 11.25rem;

  a {
    position: relative;
    margin: 0 1.0625rem;
    font-size: 0.8125rem;
    font-size: 700;
    letter-spacing: 0.125rem;
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;

    transition: color 0.2s ease-in-out;

    &::after {
      content: "";
      position: absolute;
      top: calc(100% + 2.135rem);
      left: 0;
      z-index: 10;
      display: block;
      width: 100%;
      height: 0.15rem;
      background-color: ${(props) => props.theme.colors.primary};
      transform: scaleX(0);
      transform-origin: right;

      transition: transform 0.2s ease-in-out;
    }

    &:hover {
      color: ${(props) => props.theme.colors.primary};

      &::after {
        transform: scaleX(1);
        transform-origin: left;
      }
    }
  }

  @media (max-width: 1024px) and (orientation: portrait) {
    display: none;
  }
`);

const CartIcon = styled(BsCart3)`
  font-size: 1.4375rem;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;

  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const MenuIcon = styled(GiHamburgerMenu)`
  display: none;
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.white};
  margin-right: 2.625rem;
  cursor: pointer;

  @media (max-width: 1024px) and (orientation: portrait) {
    display: block;
  }

  @media (max-width: 576px) and (orientation: portrait) {
    margin-right: 0;
  }
`;
