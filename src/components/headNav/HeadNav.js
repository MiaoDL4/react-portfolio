import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Nav, Container, Navbar } from "react-bootstrap";

import "./style.css"

function HeadNav() {
  const [active, setActive] = useState("");

  const handleClick = (page) => {
    setActive(page);
  };

  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand as={Link} to="/" className="header color">
          DM Profile
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/about"
              className={`color ${active === "about" ? "active" : ""}`}
              onClick={()=>handleClick("about")}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/Portfolio"
              className={`color ${active === "portfolio" ? "active" : ""}`}
              onClick={()=>handleClick("portfolio")}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/Resume"
              className={`color ${active === "resume" ? "active" : ""}`}
              onClick={()=>handleClick("resume")}
            >
              Resume
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/Contact"
              className={`color ${active === "contact" ? "active" : ""}`}
              onClick={()=>handleClick("contact")}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default HeadNav;
