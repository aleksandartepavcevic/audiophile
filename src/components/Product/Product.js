import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { theme } from "../../theme/theme";

const Product = React.forwardRef((props, ref) => {
  const { name, image, link } = props;

  const productImage = {
    initial: {
      x: "-50%",
      scale: 1,
    },
    whileHover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeIn",
      },
    },
  };

  const productLink = {
    whileHover: {
      color: theme.colors.primary,
    },
  };

  return (
    <Link href={link} scroll={false}>
      <MotionContainer initial="initial" whileHover="whileHover" ref={ref}>
        <MotionImage variants={productImage} url={image} />
        <Name>{name}</Name>
        <MotionLink variants={productLink}>
          Shop <Chevron />
        </MotionLink>
      </MotionContainer>
    </Link>
  );
});

export default Product;

const MotionContainer = motion(styled.div`
  position: relative;
  width: 21.875rem;
  height: 12.75rem;
  background-color: ${(props) => props.theme.colors.gray};
  border-radius: 0.5rem;
  text-align: center;
  cursor: pointer;

  @media (max-width: 1024px) and (orientation: portrait) {
    width: 18.9375rem;
    height: 10.3125rem;
  }

  @media (max-width: 576px) and (orientation: portrait) {
    width: 100%;
    height: 12.3125rem;

    &:not(:last-of-type) {
      margin-bottom: 4.25rem;
    }
  }
`);

const Name = styled.h6`
  margin-top: 7.25rem;
  margin-bottom: 1rem;
  font-size: 1.125rem;
  text-transform: uppercase;

  @media (max-width: 1024px) and (orientation: portrait) {
    margin-top: 5.25rem;
  }

  @media (max-width: 576px) and (orientation: portrait) {
    margin-top: 6.75rem;
    margin-bottom: 0.85rem;
  }
`;

const MotionImage = motion(styled.div`
  position: absolute;
  z-index: 10;
  left: 50%;
  top: -5rem;
  transform: translateX(-50%);
  width: 8rem;
  height: 10rem;
  background-image: url(${(props) => props.url});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;

  &::after {
    content: "";
    position: absolute;
    z-index: 9;
    bottom: 0;
    left: 0;
    width: 7.625rem;
    height: 1.125rem;
    background-color: ${(props) => props.theme.colors.black};
    filter: blur(1.4875rem);
  }

  @media (max-width: 1024px) and (orientation: portrait) {
    width: 7rem;
    height: 8rem;
  }

  @media (max-width: 576px) and (orientation: portrait) {
    top: -3rem;
  }
`);

const MotionLink = motion(styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8125rem;
  letter-spacing: 0.0625rem;
  text-decoration: none;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.black}80;
`);

const Chevron = styled(BiChevronRight)`
  font-size: 1.5rem;
  fill: ${(props) => props.theme.colors.primary};
`;
