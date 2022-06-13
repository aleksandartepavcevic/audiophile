import React from "react";
import styles from "./Typography.module.scss";
import { motion } from "framer-motion";

const Paragraph = (props, ref) => {
  const { value, page, variant, color, isMotion, ...rest } = props;

  if (isMotion) {
    return (
      <motion.p
        className={`${styles.paragraph} ${styles[variant]} ${styles[color]} ${styles[page]}`}
        ref={ref}
        page={page}
        variant={variant}
        {...rest}
      >
        {value}
      </motion.p>
    );
  } else
    return (
      <p
        className={`${styles.paragraph} ${styles[variant]} ${styles[color]} ${styles[page]}`}
        ref={ref}
        page={page}
        variant={variant}
        {...rest}
      >
        {value}
      </p>
    );
};

export default Paragraph;
