import { motion } from "framer-motion";
import styled from "styled-components";

const Loader = ({ pre, page }) => {
  const container = {
    initial: {
      y: 0,
    },
    animate: {
      y: "-100%",
      transition: {
        duration: 1,
        delay: 2,
        ease: "easeInOut",
      },
    },
  };

  const firstElement = {
    initial: {
      y: 0,
    },
    animate: {
      y: "-100%",
      transition: {
        duration: 1,
        delay: 1.8,
        ease: "easeInOut",
      },
    },
  };

  const secondElement = {
    initial: {
      y: 0,
    },
    animate: {
      y: "-100%",
      transition: {
        duration: 1,
        delay: 2,
        ease: "easeInOut",
      },
    },
  };

  const logo = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 0,
      transition: {
        duration: 0.8,
        delay: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <Container
      variants={container}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <MotionContainer variants={firstElement} />
      <MotionContainer second variants={secondElement} />
      {pre && (
        <MotionLogo
          variants={logo}
          src="/assets/navigation/logo.svg"
          alt="Logo"
        />
      )}
    </Container>
  );
};

export default Loader;

const Container = motion(styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
`);

const MotionContainer = motion(styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: ${(props) => (props.second ? "998" : "999")};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.second ? props.theme.colors.primary : props.theme.colors.secondary};
`);

const MotionLogo = motion(styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
`);
