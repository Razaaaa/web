import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import myLogo from 'C:/Users/Dawood/Desktop/web-project/src/assets/img/cure-logo2.png'
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';

export const LoginNavbar = () =>  {
  return (
    <Navbar collapseOnSelect expand="lg" className="mynav">
      <Container>
      <Link to={`/`}><Navbar.Brand href="#home" className="logo-img"><img src={myLogo}></img></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <NavDropdown title="John Doe" id="basic-nav-dropdown" className="nav-text" >
              <Link to={`/users/editprofile`}><NavDropdown.Item href="#action/3.1" className="nav-droptext">Profile</NavDropdown.Item></Link>
              <Link to={`/`}><NavDropdown.Item href="#action/3.2" className="nav-droptext">
                  Logout
              </NavDropdown.Item></Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );    
}
export default LoginNavbar;
