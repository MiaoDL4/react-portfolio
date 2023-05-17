import React from "react";
import { motion as m } from "framer-motion";

import "./style.css";

const skills = [
  "HMTL",
  "CSS",
  "JavaScript",
  "JQuery",
  "Resposive design",
  "React",
  "APIs",
  "Node",
  "Express",
  "MySQL & Sequelise",
  "MongoDB & Mongoose",
  "REST",
  "GraphQL",
];
export function Resume() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <h1>Please feel free to look at my <a download href="/">resume</a></h1>
      {/* TODO need link for relevent resume */}
      <h2>Skills ive developed so far: </h2>
      <ul>
        {skills.map((skill,i) => {
          return (
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: i * 0.15 }}
            >
              {skill}
            </m.div>
          );
        })}
      </ul>
    </m.div>
  );
}
export default Resume;
