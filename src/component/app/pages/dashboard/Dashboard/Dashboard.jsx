import React from "react";
import './Dashboard.css'
import appimg from "C:/Users/Dawood/Desktop/web-project/src/assets/img/icons8-appointments-64.png";
import appimg2 from "C:/Users/Dawood/Desktop/web-project/src/assets/img/icons8-cancel-order-50.png"
import appimg3 from "C:/Users/Dawood/Desktop/web-project/src/assets/img/icons8-payments-64.png"
function Dashboard() {
  return (
  
  <div className="dash">
    <div className="stats">

      <div className="card-stat">
        <img src={appimg}></img>
        <h4>Total Appointments</h4>
        <p>15</p>
      </div> 

      <div className="card-stat">
        <img src={appimg2}></img>
        <h4>Appointments Cancelled</h4>
        <p>03</p>
      </div> 

      <div className="card-stat">
        <img src={appimg3}></img>
        <h4>Total Money Spent</h4>
        <p>Rs. 12,200</p>
      </div> 
    </div>
  </div>
  );
}

export default Dashboard;
