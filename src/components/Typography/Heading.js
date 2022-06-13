import React from "react";
import { motion } from "framer-motion";
import styles from "./Typography.module.scss";

const Heading = (props) => {
  const { value, as, page, isMotion, children, ...rest } = props;
  let className;

  switch (as) {
    case "h1":
      className = `${styles.heading} ${styles.one} ${styles[page]}`;
      break;
    case "h2":
      className = `${styles.heading} ${styles.two} ${styles[page]}`;
      break;
    case "h3":
      className = `${styles.heading} ${styles.three} ${styles[page]}`;
      break;

    default:
      className = `${styles.heading} ${styles.one}`;
      break;
  }

  if (isMotion) {
    return (
      <motion.h1 className={className} as={as} page={page} {...rest}>
        {value ?? children}
      </motion.h1>
    );
  } else
    return (
      <h1 className={className} as={as} page={page} {...rest}>
        {value ?? children}
      </h1>
    );
};

export default Heading;
