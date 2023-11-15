import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home-page">
      <div className="upper-part">
        <div className="home-txt">
          <h3>Why wait for a</h3>
          <h1>Doctor?</h1>
          <p> <span>The CureHotline Offers A Telemedicine Platform To Help You Make Decisions On How You Choose To Stay Healthy.</span></p>
          <Link to={`/login`}><button className="home-btn">Get Started</button></Link>
        </div>

        <div className="homeimage">
          <img className="home-img" src="https://www.thecaremd.com/uploads/sliders/811665656486sliders.webp" alt="the caremd online doctor and virtual health care"></img>
        </div>
      </div>

      <div className="lower-part">
        <h2>Our Services</h2>
        <div className="lower-subpart">

          <div className="item1">
              <div>
                  <img className="icon-img" src="https://www.thecaremd.com/uploads/home-contents/9411689774408home-content.png" alt="the caremd online doctor and virtual health care"></img>
              </div>
              <h4>Communication</h4>
              <p>Communication made easy via text, voice, or video options.</p>
          </div>

          <div className="item1">
              <div>
                  <img className="icon-img" src="https://www.thecaremd.com/uploads/home-contents/9681689774487home-content.png" alt="the caremd online doctor and virtual health care"></img>
              </div>
              <h4>Online Appointments</h4>
              <p>You can access your medical services at your own convenience.</p>
          </div> 

        </div>
      </div>
    </div>
  )
}

export default Home