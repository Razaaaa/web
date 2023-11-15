import React from 'react'
import './Payment.css';
const Payments = () => {

  const appointments = [
    { time: "9:00 AM", date:"11-11-2023", doctor: "Dr. Smith", reason:"Svere Fever", fee:"Rs.5000" },
    { time: "10:00 AM", date:"21-11-2023", doctor: "Dr. Smith", reason:"Heacahe", fee:"Rs.4000" },
    { time: "11:00 AM", date:"1-12-2023", doctor: "Dr. Smith", reason:"Muscle pain", fee:"Rs.3000" },
    { time: "12:00 PM", date:"15-12-2023", doctor: "Dr. Smith", reason:"Back pain", fee:"Rs.2500" },
    { time: "15:00 PM", date:"31-12-2023", doctor: "Dr. Smith", reason:"Thyroid Checkup", fee:"Rs.1000" }
  ];

  return (
    <div className="appointment-table-container">
       <h1>Your Payment History</h1>
      <table className="appointment-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Date</th>
            <th>Doctor Name</th>
            <th>Reason</th>
            <th>Fee</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td>{appointment.time}</td>
              <td>{appointment.date}</td>
              <td>{appointment.doctor}</td>
              <td>{appointment.reason}</td>
              <td>{appointment.fee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Payments