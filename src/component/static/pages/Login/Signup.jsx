import React from 'react';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';

const Signup = () => {
  const navigate = useNavigate()
    const schema = yup.object().shape({
      fname: yup.string().required('First Name is Required'),
      lname: yup.string().required('Last Name is Required'),
      email: yup
        .string()
        .required('Email is Required')
        .email('Invalid Email. Please enter a valid email e.g (raza@gmail.com)'),
      password: yup.string().required('Enter valid password')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$/,
        'Password: 1 lowercase, 1 uppercase, 1 digit, 1 special character, 8-15 characters.'
      ),
      repassword: yup.string().required('Passwords must match')
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
      age: yup.number().required('Enter valid age')
      .min(18, 'Age must be at least 18 years')
      .typeError('Age is Required'),
    });
  
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm({
      resolver: yupResolver(schema),
  });

  const handleFormSubmit = (data) => {
   
    try {
      axios.post("http://localhost:8082/signup",data)
      toast.success("You have been successfully registered. Now LogIn to continue")
      navigate('/login');
      reset();
      
    } catch (error) {
    console.log(data)
      
    }
  };
  
  return (
    <div className="sign-form">
      <div className="sign-body" id="container">
        <Link to={`/`}><p><i class="arrow left"></i>Back to Home</p></Link>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <h1>Sign Up</h1>
          <div className="social-container">
            <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
            <a href="https://mail.google.com/"><i className="fab fa-google-plus-g"></i></a>
          </div>
          <span>or SignUp directly</span>
          <input
            type="text"
            {...register('fname')}
            placeholder="First Name"
          />
          {errors.fname && (
            <p className="red-error">{errors.fname.message}</p>
          )}

          <input
            type="text"
            {...register('lname')}
            placeholder="Last Name"
          />
          {errors.lname && (
            <p className="red-error">{errors.lname.message}</p>
          )}

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

          <input
              type="password"
              {...register('repassword')}
              placeholder="Re-Enter Password"
            />
            {errors.repassword && (
              <p className="red-error">{errors.repassword.message}</p>
            )}
          <input
            type="number"
            {...register('age')}
            placeholder="Enter Age"
          />
          {errors.age && (
            <p className="red-error">{errors.age.message}</p>
          )}

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

