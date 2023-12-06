import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import myLogo from 'D:/MERN/web-project/src/assets/img/cure-logo2.png'
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { jwtDecode } from "jwt-decode";

export const LoginNavbar = () =>  {
  const [userProfile, setUserProfile] = useState({
    fname: "",
    lname: "",
    email: "",
  });


  useEffect(() => {
    fetchUserProfile();
  },[]);

  const fetchUserProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      const decoded = jwtDecode(token);

      console.log("decoded token", decoded);

      const apiUrl = `http://localhost:8082/profile/${decoded.user_id}`;

      const response = await fetch(apiUrl, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user profile');
      }

      const data = await response.json();
      setUserProfile(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="mynav">
      <Container>
      <Link to={`/`}><Navbar.Brand href="#home" className="logo-img"><img src={myLogo} alt="black"></img></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <NavDropdown title={userProfile.fname} id="basic-nav-dropdown" className="nav-text" >
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
