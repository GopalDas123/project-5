import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbarr = () => {
  return (
    <Navbar variant="dark" bg="danger" expand="lg">
      <Navbar.Brand href="#home">
        <b>WINSURE</b>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ marginLeft: "75%" }} className="mr-auto">
          <Link to="./">
            <Nav.Link
              href="#home"
              style={{ color: "white", textTransform: "uppercase" }}
            >
              Home
            </Nav.Link>
          </Link>
          <Link to="./projects">
            <Nav.Link
              href="#link"
              style={{ color: "white", textTransform: "uppercase" }}
            >
              Projects
            </Nav.Link>
          </Link>
          
          <Nav.Link
            href="mailto:gopaldax@gmail.com"
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
