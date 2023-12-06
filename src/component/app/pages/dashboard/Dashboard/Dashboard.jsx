// import React from "react";
//  import './Dashboard.css'
// import appimg from "C:/Users/Dawood/Desktop/web-project/src/assets/img/icons8-appointments-64.png";
// import appimg2 from "C:/Users/Dawood/Desktop/web-project/src/assets/img/icons8-cancel-order-50.png"
// import appimg3 from "C:/Users/Dawood/Desktop/web-project/src/assets/img/icons8-payments-64.png"
// function Dashboard() {
//   return (
  
//   <div className="dash">
//     <div className="stats">

//       <div className="card-stat">
//         <img src={appimg}></img>
//         <h4>Total Appointments</h4>
//         <p>15</p>
//       </div> 

//       <div className="card-stat">
//         <img src={appimg2}></img>
//         <h4>Appointments Cancelled</h4>
//         <p>03</p>
//       </div> 

//       <div className="card-stat">
//         <img src={appimg3}></img>
//         <h4>Total Money Spent</h4>
//         <p>Rs. 12,200</p>
//       </div> 
//     </div>
//   </div>
//   );
// }

// export default Dashboard;


import React from "react";
import './Dashboard.css'
import {
  Card,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { useState } from 'react';



// const [data] = useState({
//   labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
//   datasets: [
//     {  
//       label: 'My First dataset',
//       backgroundColor: 'rgba(194, 116, 161, 0.5)',
//       borderColor: 'rgb(194, 116, 161)',
//       data: [65, 59, 90, 81, 56, 55, 40],
//     },
//     {
//       label: 'My Second dataset',
//       backgroundColor: 'rgba(71, 225, 167, 0.5)',
//       borderColor: 'rgb(71, 225, 167)',
//       data: [28, 48, 40, 19, 96, 27, 100],
//     },
//   ],
// });

function Dashboard() {
  return (
    <div className="dash">
      <Container fluid>
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-chart text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="8">
                    <div className="numbers">
                      <p className="card-category">Appointments Completed</p>
                      <Card.Title as="h4">15</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
              
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-light-3 text-success"></i>
                    </div>
                  </Col>
                  <Col xs="8">
                    <div className="numbers">
                      <p className="card-category">Total Money Spent</p>
                      <Card.Title as="h4">Rs. 1,2400</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
              
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      {/* <i className="nc-icon nc-vector text-danger"></i> */}
                      {/* <FontAwesomeIcon icon="fa-solid fa-clipboard-user" /> */}
                    </div>
                  </Col>
                  <Col xs="8">
                    <div className="numbers">
                      <p className="card-category">Upcoming Appointments</p>
                      <Card.Title as="h4">04</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
              
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-favourite-28 text-primary"></i>
                    </div>
                  </Col>
                  <Col xs="8">
                    <div className="numbers">
                      <p className="card-category">Appointments Cancelled</p>
                      <Card.Title as="h4">07</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* <div className="pie-chart">
        <CDBContainer>
          <h3 className="mt-5">Pie chart</h3>
          <Pie data={data} options={{ responsive: true }} />
        </CDBContainer>
      </div> */}
    </div>
  );
}

export default Dashboard;
