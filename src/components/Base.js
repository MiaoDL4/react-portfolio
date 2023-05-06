import { React, useState } from "react";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Portfolio from "./sections/Portfolio";
import Resume from "./sections/Resume";
import { Route, Routes } from "react-router-dom";

function Base() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Portfolio" element={<Portfolio />} />
      <Route path="/Resume" element={<Resume />} />
    </Routes>
  );
}
export default Base;
