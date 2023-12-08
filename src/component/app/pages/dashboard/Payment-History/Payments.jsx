import React, { useEffect, useState } from 'react'
import './Payment.css';
import { jwtDecode } from "jwt-decode";


const Payments = () => {
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
          {userOrders.map((order, index) => (
            <tr key={index}>
              <td>{order.consultationtime}</td>
              <td>{order.consultationdate}</td>
              <td>{order.doctorname}</td>
              <td>{order.reason}</td>
              <td>{4000}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Payments

