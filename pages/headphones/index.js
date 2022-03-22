import Head from "next/head";
import React from "react";
import Loader from "../../src/components/Loader/Loader";

const Headphones = ({ isInitial }) => {
  return (
    <div>
      <Head>
        <title>Audiophile - Headphones</title>
      </Head>
      {isInitial && <Loader pre />}
      {!isInitial && <Loader page />}
      Headphones
    </div>
  );
};

export default Headphones;
