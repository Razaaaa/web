import React from 'react'
import 'C:/Users/Dawood/Desktop/web-project/src/component/app/pages/dashboard/Payment-History/Payment.css';

const CurrentAppointments = () => {
  const appointments = [
    { time: "9:00 AM", date:"11-11-2023", doctor: "Dr. Smith", reason:"Svere Fever", meetlink:"https://meet.google.com/xvc-iqde-dur" },
    { time: "10:00 AM", date:"21-11-2023", doctor: "Dr. Smith", reason:"Heacahe", meetlink:"https://meet.google.com/xvc-iqde-dur" },
    { time: "11:00 AM", date:"1-12-2023", doctor: "Dr. Smith", reason:"Muscle pain", meetlink:"https://meet.google.com/xvc-iqde-dur" },
    { time: "12:00 PM", date:"15-12-2023", doctor: "Dr. Smith", reason:"Back pain", meetlink:"https://meet.google.com/xvc-iqde-dur" },
    { time: "15:00 PM", date:"31-12-2023", doctor: "Dr. Smith", reason:"Thyroid Checkup", meetlink:"https://meet.google.com/xvc-iqde-dur" }
  ];

  return (
    <div className="appointment-table-container">
        <h1>Your Upcoming Appointments</h1>
      <table className="appointment-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Date</th>
            <th>Doctor Name</th>
            <th>Reason for Consultation</th>
            <th>Google meet link</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td>{appointment.time}</td>
              <td>{appointment.date}</td>
              <td>{appointment.doctor}</td>
              <td>{appointment.reason}</td>
              <td>{appointment.meetlink}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CurrentAppointments