import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';

const Login = () => {
	const navigate = useNavigate()
    const schema = yup.object().shape({
      email: yup
        .string()
        .required('Email is Required')
        .email('Invalid Email.'),
      password: yup.string().required('Enter valid password'),
    });
  
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm({
      resolver: yupResolver(schema),
  });

  const handleFormSubmit = async(data) => {
    try {
     const response = await axios.post("http://localhost:8082/login",data)
	 console.log("ressssssssssss",response.data)
      reset();
	  if(response.data.status===200){
		  toast.success("Login Successful")
		  localStorage.setItem("token",JSON.stringify(response.data.token))
		  navigate("/users/dashboard")
		}
		else{
			toast.dark(response.data.message)
		}

    } catch (error) {

		console.log(data)
    }
  };

return (
	<div className="login-form">
		<div className="form-body" id="container">
			<div className="form-container sign-in-container">
				<Link to={`/`}><p><i className="arrow left"></i>Back to Home</p></Link>
				<form onSubmit={handleSubmit(handleFormSubmit)}>
					<h1>Sign in</h1>

					<div class="social-container">
						<a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
						<a href="https://mail.google.com/"><i className="fab fa-google-plus-g"></i></a>
					</div>

					<span>or use your account</span>

					<input
						type="email"
						{...register('email')}
						placeholder="Email"
					/>
					{errors.email && (
						<p className="red-error">{errors.email.message}</p>
					)}

					<input
						type="password"
						{...register('password')}
						placeholder="Enter Password"
					/>
					{errors.password && (
						<p className="red-error">{errors.password.message}</p>
					)}

					<button>Log In</button>
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