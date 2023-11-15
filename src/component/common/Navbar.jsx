import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import myLogo from 'C:/Users/Dawood/Desktop/web-project/src/assets/img/cure-logo2.png'
import { Link } from 'react-router-dom';

const Header =() => {
  return (
    <Navbar collapseOnSelect expand="lg" className="mynav">
      <Container>
      <Link to={`/`}><Navbar.Brand href="#home" className="logo-img"><img src={myLogo}></img></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav className="nav-text">
            <Link to={`/`}> Home</Link>
            <Link to={`/about`}>About Us</Link>
            <Link to={`/blog`}>Blogs</Link>
            <Link to={`/login`}>Log In</Link>
            <Link to={`/contact`}>Contact Us</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );    
}

export default Header;
