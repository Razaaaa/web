import React from 'react'
import './About.css'
import myLogo from 'D:/MERN/web-project/src/assets/img/me.jpg'

const About = () => {
  return (
    <div className="about-page">

      <div className="info">
      <h1>ABOUT US</h1>
      <p>Welcome to our Telemedicine Application Proposal, Version 1.0. We are a team of dedicated and passionate individuals working together to create a convenient and accessible telemedicine platform for patients and healthcare providers.</p>
      <br></br>
      <h1>OUR MISSION</h1>
      <p>Our mission is clear: to empower patients and healthcare providers with a platform that simplifies the healthcare journey. We aim to provide patients with a user-friendly tool to schedule online appointments with healthcare professionals, enabling them to seek medical advice from the comfort of their own homes. We also strive to give healthcare providers the tools they need to efficiently connect with their patients.</p>
      <br></br>
      <h1>OUR TEAM</h1>
      </div>

      
      <div className="about-card">

        <div className="card-shape">
          <img src={myLogo}></img>
          <h3>Muhammad Raza</h3>
          <p>Co-Founder</p>
        </div> 

        <div className="card-shape">
          <img src={myLogo}></img>
          <h3>Muhammad Raza</h3>
          <p>Co-Founder</p>
        </div> 

        <div className="card-shape">
          <img src={myLogo}></img>
          <h3>Muhammad Raza</h3>
          <p>Co-Founder</p>
        </div> 

        <div className="card-shape">
          <img src={myLogo}></img>
          <h3>Muhammad Raza</h3>
          <p>Co-Founder</p>
        </div> 
        
      </div>
    </div>
  )
}

export default About