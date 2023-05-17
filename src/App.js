import { React } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HeadNav from "./components/headNav/HeadNav";
import Footer from "./components/Footer";
import { About } from "./components/About";
import Contact from "./components/contact/Contact";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Resume } from "./components/resume/Resume";
import { Home } from "./components/home/Home";

import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { AnimatePresence } from "framer-motion";
import "./app.css";

function App() {
  const pathname = useLocation();
  return (
    <div className="page">
      <header className="banner">
        <HeadNav />
      </header>
      <div className="content">
        <Container>
          <AnimatePresence mode="wait">
            <Routes location={pathname} key={pathname.key} >
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Portfolio" element={<Portfolio />} />
              <Route path="/Resume" element={<Resume />} />
            </Routes>
          </AnimatePresence>
        </Container>
      </div>

      <footer className="banner">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
