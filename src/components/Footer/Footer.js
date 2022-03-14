import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Container as ContainerLayout } from "../layouts/layouts";
import Paragraph from "../Typography/Paragraph";
import {
  FaFacebookSquare as Facebook,
  FaTwitterSquare as Twitter,
  FaInstagram as Instagram,
} from "react-icons/fa";
import { useWindowSize } from "../../hooks/useWindowSize";

const Footer = () => {
  const size = useWindowSize();

  return (
    <Container>
      <Navigation>
        <Link href="/">
          <Logo src="/assets/navigation/logo.svg" />
        </Link>
        <Links>
          <Link href="/">Home</Link>
          <Link href="/headphones">Headphones</Link>
          <Link href="/speakers">Speakers</Link>
          <Link href="/earphones">Earphones</Link>
        </Links>
      </Navigation>
      <Content>
        <Paragraph
          value="Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week."
          white
          variant="footer"
        />
        {size.width > 1024 ? (
          <Socials>
            <Facebook />
            <Twitter />
            <Instagram />
          </Socials>
        ) : null}
      </Content>
      <Copyright>
        <Paragraph
          value="Copyright 2021. All Rights Reserved"
          white
          variant="footer"
        />
        {size.width <= 1024 && size.orientation === "portrait" ? (
          <Socials>
            <Facebook />
            <Twitter />
            <Instagram />
          </Socials>
        ) : null}
      </Copyright>
    </Container>
  );
};

export default Footer;

const Container = styled(ContainerLayout)`
  position: relative;
  padding-top: 4.6875rem;
  padding-bottom: 3rem;
  background-color: ${(props) => props.theme.colors.secondary};

  &::before {
    content: "";
    display: block;
    width: 6.25rem;
    height: 0.25rem;
    background-color: ${(props) => props.theme.colors.primary};
    position: absolute;
    top: 0;
    left: 10.3125rem;
  }

  @media (max-width: 1024px) and (orientation: portrait) {
    padding-top: 3.75rem;
    padding-bottom: 2.875rem;

    &::before {
      left: 2.5rem;
    }
  }

  @media (max-width: 576px) and (orientation: portrait) {
    text-align: center;

    &::before {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1024px) and (orientation: portrait) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 576px) and (orientation: portrait) {
    align-items: center;
  }
`;

const Logo = styled.img`
  width: 8.875rem;
  height: 1.5625rem;
  object-fit: contain;
`;

const Links = styled.div`
  a {
    margin: 0 1.0625rem;
    font-size: 0.8125rem;
    font-size: 700;
    letter-spacing: 0.125rem;
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
    text-transform: uppercase;

    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }

    &:last-of-type {
      margin: 0 0 0 1.0625rem;
    }
  }

  @media (max-width: 1024px) and (orientation: portrait) {
    margin-top: 2rem;

    a {
      margin: 0 1.0625rem;

      &:first-of-type {
        margin: 0 1.0625rem 0 0;
      }
    }
  }

  @media (max-width: 576px) and (orientation: portrait) {
    display: flex;
    flex-direction: column;
    align-items: center;

    a,
    a:first-of-type,
    a:last-of-type {
      margin: 1rem 0;
    }
  }
`;

const Content = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 2.25rem;
  margin-bottom: 3.5rem;

  @media (max-width: 1024px) and (orientation: portrait) {
    justify-content: flex-start;
  }

  @media (max-width: 576px) and (orientation: portrait) {
    margin: 3rem 0;
  }
`;

const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 576px) and (orientation: portrait) {
    flex-direction: column;
  }
`;

const Socials = styled.div`
  svg {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.white};
    cursor: pointer;

    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }

    &:not(:last-of-type) {
      margin-right: 1rem;
    }
  }

  @media (max-width: 576px) and (orientation: portrait) {
    margin-top: 3rem;
  }
`;
