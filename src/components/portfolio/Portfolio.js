import React from "react";
import { motion as m } from "framer-motion";
import "./style.css";

const projects = [
  {
    projectName: "Skills Matcher",
    Github: "https://github.com/MiaoDL4/spicy-pencils-skills-matcher",
    Page: "https://spicy-pencils-skills-matcher-1.herokuapp.com/",
    image: "/images/Skillsmatcher.png",
    id: 1,
  },
  {
    projectName: "Wellness",
    Github: "https://github.com/MiaoDL4/Wellness-ap",
    Page: "https://rippi9.github.io/Wellness-ap/",
    image: "/images/Well.png",
    id: 2,
  },
  {
    projectName: "Just Another Text Editor PWA",
    Github: "https://github.com/MiaoDL4/JATEPWA",
    Page: "https://radiant-scrubland-43931.herokuapp.com/",
    image: "/images/JatePWA.png",
    id: 3,
  },
  {
    projectName: "Weather API",
    Github: "https://miaodl4.github.io/WhatsTheWeather/",
    Page: "https://github.com/MiaoDL4/WhatsTheWeather",
    image: "/images/Weather.png",
    id: 4,
  },
  {
    projectName: "Note taker",
    Github: "https://github.com/MiaoDL4/Note-taker-of-love",
    Page: "https://salty-wave-26367.herokuapp.com/",
    image: "/images/notetaker.png",
    id: 5,
  },
  {
    projectName: "Project 3",
    Github: "",
    Page: "",
    image: "./images/",
    id: 6,
  },
];

export function Portfolio() {
  return (
    <>
      <m.div
        className="flexcontainer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {projects.map((card, i) => {
          return (
            <a href={card.Page}>
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: i * 0.15 }}
                className="cardProject"
                whileHover={{
                  height: "30dvh",
                }}
              >
                <div className="cardText">
                  <h1>{card.projectName}</h1>
                </div>
                <m.img
                  className="initalState"
                  src={card.image}
                  alt={card.projectName}
                  whileHover={{
                  filter: "blur(0.5px)",
                  transition: { duration: 1, ease: "easeOut"},
                }}
                />
              </m.div>
            </a>
          );
        })}
      </m.div>
    </>
  );
}
export default Portfolio;
