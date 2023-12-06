import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Administrator.css'

const AdminPanel = () => {
    const [feedbackData, setFeedbackData] = useState([]);
    // Define a function to fetch feedback data
    const fetchFeedbackData = async () => {
      try {
        const response = await axios.get('http://localhost:8082/contact');

        // Update the state with the fetched data
        setFeedbackData(response.data);
      } catch (error) {
        console.error('Error fetching feedback data:', error);
        // Handle the error, e.g., show a notification to the user
      }
    };

  useEffect(()=>{

    fetchFeedbackData()
  },[])


  const [regUserData, setRegUserData] = useState([]);
    // Define a function to fetch feedback data
    const fetchRegUserData = async () => {
      try {
        const response = await axios.get('http://localhost:8082/signup');

        // Update the state with the fetched data
        setRegUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Handle the error, e.g., show a notification to the user
      }
    };

  useEffect(()=>{

    fetchRegUserData()
  },[])



  return (
    <div className="Admin-page">
      <div className="sub">
        <h2>Feedback Data:</h2>
        <ul>
            {feedbackData.map((feedback) => (
            <li key={feedback._id}>
                <p>Name: {feedback.name}</p>
                <p>Email: {feedback.email}</p>
                <p>Message: {feedback.message}</p>
                <hr />
            </li>
            ))}
        </ul>
      </div>
      <div className="sub">
        <h2>Registered Users:</h2>
        <ul>
            {regUserData.map((regUser) => (
            <li key={regUser._id}>
                <p>First Name: {regUser.fname}</p>
                <p>Last Name: {regUser.lname}</p>
                <p>Email: {regUser.email}</p>
                <hr />
            </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPanel;
