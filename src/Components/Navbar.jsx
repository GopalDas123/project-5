import React from "react";
import { Navbar, Nav } from "react-bootstrap";
const Navbarr = () => {
  return (
    <Navbar variant="dark" bg="danger" expand="lg">
      <Navbar.Brand href="#home">
        <b>WINSURE</b>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ marginLeft: "75%" }} className="mr-auto">
          <Nav.Link
            href="#home"
            style={{ color: "white", textTransform: "uppercase" }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="#link"
            style={{ color: "white", textTransform: "uppercase" }}
          >
            About
          </Nav.Link>
          <Nav.Link
            href="#link"
            style={{ color: "white", textTransform: "uppercase" }}
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbarr;
