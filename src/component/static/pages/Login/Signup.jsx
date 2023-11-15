import React, { useState } from 'react';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');
  const [age, setAge] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [ageError, setAgeError] = useState('');
  let emailRegix = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	let passwordRegix = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$/;
  const navigate = useNavigate();

  const formSubmission = (event) => {
    event.preventDefault();
    setEmailError("");
    setPasswordError("");
    setAgeError("");

    let hasError = false;
		if (!(emailRegix.test(email))) {
      setEmailError("Enter the valid email");
			hasError = true;
    }
		
		if (!(passwordRegix.test(password))) {
      setPasswordError("Enter the strong password");
			hasError = true;
    }

    if (!age || isNaN(age) || age < 18) {
      setAgeError('Age must be 18 or higher');
      hasError = true;
    }

		if (!hasError) {
			navigate('/users/dashboard')
		}
  };

  return (
    <div className="sign-form">
      <div className="sign-body" id="container">
        <Link to={`/`}><p><i class="arrow left"></i>Back to Home</p></Link>
        <form>
          <h1>Sign Up</h1>
          <div className="social-container">
            <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
            <a href="https://mail.google.com/"><i className="fab fa-google-plus-g"></i></a>
          </div>
          <span>or SignUp directly</span>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p id="red-error">{emailError}</p>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p id="red-error">{passwordError}</p>
          <input
            type="password"
            placeholder="Re-Enter Password"
            value={reEnterPassword}
            onChange={(e) => setReEnterPassword(e.target.value)}
          />
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <p id="red-error">{ageError}</p>
          <button onClick={(e)=> formSubmission(e)}>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
