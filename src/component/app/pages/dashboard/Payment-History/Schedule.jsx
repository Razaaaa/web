import React, { useEffect, useState } from 'react';
import './Payment.css';
import { jwtDecode } from "jwt-decode";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CurrentAppointments = () => {
  const [userOrders, setUserOrders] = useState([]);

  useEffect(() => {
    fetchUserOrders();
  }, []);

  const fetchUserOrders = async () => {
    try {
      const token = localStorage.getItem("token");
      const decoded = jwtDecode(token);

      console.log("decoded token", decoded);

      const apiUrl = `http://localhost:8082/order/${decoded.user_id}`;

      const response = await fetch(apiUrl, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user orders');
      }

      const data = await response.json();
      setUserOrders(data);
    } catch (error) {
      console.error(error);
    }

  };
    
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
          {userOrders.map((order, index) => (
            <tr key={index}>
              <td>{order.consultationtime}</td>
              <td>{order.consultationdate}</td>
              <td>{order.doctorname}</td>
              <td>{order.reason}</td>
              <td>
                <a href={`https://meet.google.com/`} target="_blank" rel="noopener noreferrer">
                  Join Google Meet
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CurrentAppointments;