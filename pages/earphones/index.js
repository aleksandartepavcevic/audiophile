import React from "react";
import { motion } from "framer-motion";

const Eearphones = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 3 } }}
    >
      Eearphones
    </motion.div>
  );
};

export default Eearphones;
