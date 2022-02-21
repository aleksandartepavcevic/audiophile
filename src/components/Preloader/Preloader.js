import { motion, usePresence } from "framer-motion";
import React, { useEffect } from "react";
import styled from "styled-components";

const Preloader = () => {
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 1000);
    console.log(isPresent);
  }, [isPresent]);

  return (
    <MotionContainer
      key="preloader"
      initial={{ y: 0 }}
      animate={{
        y: "-100%",
        transition: { duration: 0.6, delay: 1.8, ease: "easeInOut" },
      }}
    >
      <MotionLogo
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transition: { duration: 0.8, delay: 0.8, ease: "easeInOut" },
        }}
        src="/assets/navigation/logo.svg"
        alt="Logo"
      />
    </MotionContainer>
  );
};

export default Preloader;

const MotionContainer = motion(styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.secondary};
`);

const MotionLogo = motion(styled.img``);
