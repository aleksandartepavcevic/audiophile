import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { BsCart3 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { Container } from "../layouts/layouts";

const Navigation = () => {
  return (
    <StyledContainer>
      <Content>
        <FlexContainer>
          <MenuIcon />
          <Logo src="/assets/navigation/logo.svg" />
          <Links>
            <Link href="/">Home</Link>
            <Link href="/">Headphones</Link>
            <Link href="/">Speakers</Link>
            <Link href="/">Earphones</Link>
          </Links>
        </FlexContainer>
        <CartIcon />
      </Content>
    </StyledContainer>
  );
};

export default Navigation;

const StyledContainer = styled(Container)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
`;

const Content = styled.div`
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
  margin-left: 11.25rem;

  a {
    margin: 0 1.0625rem;
    font-size: 0.8125rem;
    font-size: 700;
    letter-spacing: 0.125rem;
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
    text-transform: uppercase;
  }

  @media (max-width: 1024px) and (orientation: portrait) {
    display: none;
  }
`;

const CartIcon = styled(BsCart3)`
  font-size: 1.4375rem;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
`;

const MenuIcon = styled(GiHamburgerMenu)`
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.white};
  margin-right: 2.625rem;
  cursor: pointer;

  @media (min-width: 1024px) and (orientation: landscape) {
    display: none;
  }

  @media (max-width: 576px) and (orientation: portrait) {
    margin-right: 10.15rem;
  }
`;
