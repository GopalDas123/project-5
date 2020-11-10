import React from "react";
// import './Nav.css'
import {
  Navbar,
  Nav,
  //   NavDropdown,
  //   Form,
  //   FormControl,
  //   Button,
} from "react-bootstrap";
const Navbarr = () => {
  return (
    <div>
      <Navbar variant="dark" bg="danger" expand="lg">
        <Navbar.Brand href="#home">WINSURE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav style={{marginLeft:'81%'}} className="mr-auto" >
            <Nav.Link href="#home" style={{color:'white',textTransform:'uppercase'}}>Home</Nav.Link>
            <Nav.Link href="#link" style={{color:'white',textTransform:'uppercase'}}>About</Nav.Link>
            <Nav.Link href="#link" style={{color:'white',textTransform:'uppercase'}}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navbarr;
