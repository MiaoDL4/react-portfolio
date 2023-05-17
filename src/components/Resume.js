import React from "react";
import { motion as m } from "framer-motion";
export function Resume() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <h1>Resume</h1>
    </m.div>
  );
}
export default Resume;
