import React from "react";

import { Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <div>
      <Container>
        <Nav className="justify-content-center">
          <Nav.Item>
            <Nav.Link href="https://github.com/MiaoDL4">github</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://www.linkedin.com/in/dong-miao-075a3825a">Linkin</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/needsWord">TBD</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </div>
  );
}

export default Footer;
