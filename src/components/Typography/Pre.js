import React from "react";
import { motion } from "framer-motion";
import styles from "./Typography.module.scss";

const Pre = (props) => {
  const { value, isMotion, ...rest } = props;

  if (isMotion) {
    return (
      <motion.pre className={styles.pre} {...rest}>
        {value}
      </motion.pre>
    );
  } else
    return (
      <pre className={styles.pre} {...rest}>
        {value}
      </pre>
    );
};

export default Pre;
