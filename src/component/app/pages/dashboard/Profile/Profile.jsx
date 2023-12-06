import React, { useEffect, useState } from "react";
import './Profile.css';
import {
  Button,
  Card,
  Form,
  Container,
  Row,
  Col
} from "react-bootstrap";
import { jwtDecode } from "jwt-decode";
import { toast } from 'react-toastify';


function User() {
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

    const handleUpdateProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const decoded = jwtDecode(token);
  
        const apiUrl = `http://localhost:8082/profile/${decoded.user_id}`;
  
        const response = await fetch(apiUrl, {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            fname: userProfile.fname, 
            lname: userProfile.lname,
            email: userProfile.email,
          }),
        });
  
        if (!response.ok) {
          throw new Error('Failed to update user profile');
        }
  
        const updatedData = await response.json();
        setUserProfile(updatedData);
        toast.success("Profile Updated");
      } catch (error) {
        console.error(error);
      }
    };
  


  return (
    <div className="profile-form">
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Edit Profile</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>First Name</label>
                        <Form.Control
                           value={userProfile.fname}
                           placeholder="First Name"
                           type="text"
                           onChange={(e) => setUserProfile({ ...userProfile, fname: e.target.value })}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Last Name</label>
                        <Form.Control
                          value={userProfile.lname}
                          placeholder="Last Name"
                          type="text"
                          onChange={(e) => setUserProfile({ ...userProfile, lname: e.target.value })}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pl-1" md="12">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Form.Control
                         value={userProfile.email}
                         placeholder="Email Address"
                         type="email"
                         onChange={(e) => setUserProfile({ ...userProfile, email: e.target.value })}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>City</label>
                        <Form.Control
                          defaultValue="Lahore"
                          placeholder="City"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="6">
                      <Form.Group>
                        <label>Country</label>
                        <Form.Control
                          defaultValue="Pakistan"
                          placeholder="Country"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button onClick={handleUpdateProfile}
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                  >
                    Update Profile
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
              <Card.Body>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <h5 className="title">{userProfile.fname} {userProfile.lname}</h5>
                  </a>
                </div>
              </Card.Body>
              <hr></hr>
              <div className="button-container mr-auto ml-auto">
                <Button
                  className="btn-simple btn-icon"
                  href="https://www.facebook.com/"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-facebook-square"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="https://www.twitter.com/"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="https://mail.google.com/"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-google-plus-square"></i>
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default User;
