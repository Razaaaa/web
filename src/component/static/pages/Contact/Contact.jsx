import React from 'react'
import './Contact.css'
const Contact = () =>{
  return (
   
    <div className="contact-form">
      <div className="contact-body" id="container">
        <form action="#">
            <h1>Contact Us</h1>
            <br></br>

            <input type="name" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" id="message" placeholder="Message" />

            <button>Send Message</button>
        </form>
      </div>
  </div>

  )
}

export default Contact
