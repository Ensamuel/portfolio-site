import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark" className='justify-content-center text-center'>
    <Navbar.Brand href="#home">Buzzy</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#home">Skills</Nav.Link>
        <Nav.Link href="#link1">Projects</Nav.Link>
        <Nav.Link href="#link2">View My Resume</Nav.Link>
        <Nav.Link href="#link2">Contact Me</Nav.Link>
        
        {/* Add more Nav.Link components for other links */}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default Footer