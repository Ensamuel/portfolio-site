import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavComp = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Buzzy</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
         
          <a href='tinyurl.com/EbubeCvs'>View My Resume</a>
         
          
          {/* Add more Nav.Link components for other links */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavComp;
