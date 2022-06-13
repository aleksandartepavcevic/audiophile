import React from "react";
import styled from "@emotion/styled";
import { BsCart3 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { Container } from "../layouts/layouts";
import { useWindowSize } from "../../hooks/useWindowSize";
import Link from "next/link";

const NavigationFixed = ({ isVisible }) => {
  const size = useWindowSize();
  console.log(isVisible);

  return (
    <StyledContainer isVisible={isVisible}>
      <Content>
        <FlexContainer>
          <MenuIcon />
          {size.width > 1024 ||
          (size.width > 576 &&
            size.width <= 1024 &&
            size.orientation === "portrait") ? (
            <Link href="/" scroll={false}>
              <a>
                <Logo src="/assets/navigation/logo.svg" />
              </a>
            </Link>
          ) : null}
          <Links>
            <Link href="/" scroll={false}>
              <a>Home</a>
            </Link>
            <Link href="/headphones" scroll={false}>
              <a>Headphones</a>
            </Link>
            <Link href="/speakers" scroll={false}>
              <a>Speakers</a>
            </Link>
            <Link href="/earphones" scroll={false}>
              <a>Earphones</a>
            </Link>
          </Links>
        </FlexContainer>
        {size.width <= 576 && size.orientation === "portrait" ? (
          <Link href="/" scroll={false}>
            <Logo src="/assets/navigation/logo.svg" />
          </Link>
        ) : null}
        <Link href="/cart">
          <a>
            <CartIcon />
          </a>
        </Link>
      </Content>
    </StyledContainer>
  );
};

export default NavigationFixed;

const StyledContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
  padding: 0 2.5rem;
  background-color: ${({ theme }) => theme.colors.black};
  transform: translateY(-100%);

  transition: transform 0.4s ease-in-out;

  ${({ isVisible }) =>
    isVisible &&
    `
      transform: translateY(0%);
    `}
`;

const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 8.9375rem;
  height: 1.5625rem;
  object-fit: contain;
`;

const Links = styled.div`
  display: flex;
  margin-left: 20.25rem;

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
      top: calc(100% + 1.23rem);
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
`;

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
