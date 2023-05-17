import React from "react";
import { motion as m } from "framer-motion";

import "./style.css";

export function Home() {
  const getWords = (str) => {
    str = str.trim();
    return str.split(/\s+/);
  };

  const sentence1 = getWords("Hello, l'm learning to become a Web Developer.");
  const sentence2 = getWords("This is a beginning of a story.");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <m.div
      style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className="column"
    >
      <div className="text">
        {sentence1.map((word, index) => (
          <m.span variants={child} style={{ marginRight: "5px" }} key={index}>
            {word}
          </m.span>
        ))}
      </div>
      <div className="text">
        {sentence2.map((word, index) => (
          <m.span variants={child} style={{ marginRight: "5px" }} key={index}>
            {word}
          </m.span>
        ))}
      </div>
    </m.div>
  );
}
export default Home;
