import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
	const navigate = useNavigate()
	const [email, setEmail] = useState()
	const [password, setPassword] = useState()
	const [emailError, setEmailError] = useState("")
	const [passwordError, setPasswordError] = useState("")
	let emailRegix = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	let passwordRegix = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$/;

	const formSubmission = (event) => {
		event.preventDefault();
		setEmailError("");
		setPasswordError("");
		let hasError = false;
		if (!(emailRegix.test(email))) {
            setEmailError("Enter the valid email");
			hasError = true;
        }
		
		if (!(passwordRegix.test(password))) {
            setPasswordError("Enter the strong password");
			hasError = true;
        }

		if (!hasError) {
			navigate('/users/dashboard')
		}
			
		}

return (
	<div className="login-form">
		<div className="form-body" id="container">
			<div className="form-container sign-in-container">
				<Link to={`/`}><p><i className="arrow left"></i>Back to Home</p></Link>
				<form action="#">
					<h1>Sign in</h1>

					<div class="social-container">
						<a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
						<a href="https://mail.google.com/"><i className="fab fa-google-plus-g"></i></a>
					</div>

					<span>or use your account</span>
					<input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
					<p id="red-error">{emailError}</p>
					<input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
					<p id="red-error">{passwordError}</p>
					<a href="#">Forgot your password?</a>
					<button onClick={(e)=> formSubmission(e)}>Log In</button>
					<Link to={`/signup`}><button className="hidden-btn" id="signUp">Sign Up</button></Link>
				</form>
			</div>
			<div className="overlay-container">
				<div className="overlay">
					<div className="overlay-panel overlay-left">
						<h1>Welcome Back!</h1>
						<p>To keep connected with us please login with your personal info</p>
						<button className="ghost" id="signIn">Log In</button>
					</div>
					<div className="overlay-panel overlay-right">
						<h1>New User?</h1>
						<p>Enter your personal details and start journey with us</p>
						<Link to={`/signup`}><button className="ghost" id="signUp">Sign Up</button></Link>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Login