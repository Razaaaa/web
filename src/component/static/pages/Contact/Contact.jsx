import React from 'react';
import axios from 'axios';
import './Contact.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const Contact = () => {
  const schema = yup.object().shape({
    name: yup.string().required('Name is Required'),
    email: yup
      .string()
      .required('Email is Required')
      .email('Invalid Email Format. Please enter a valid email in the following format: raza@gmail.com'),
      message: yup.string().required('Message is Required'),
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
      axios.post("http://localhost:8082/contact",data)
      reset();
      
    } catch (error) {
      console.log(data)
      
    }
  };

  return (
    <div className="contact-form">
      <div className="contact-body" id="container">
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <h1>Contact Us</h1>
          <br />

          <input
            type="text"
            {...register('name')}
            placeholder="Name"
          />
          {errors.name && (
            <p className="error-message">{errors.name.message}</p>
          )}

          <input type="email" {...register('email')} placeholder="Email" />
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}

          <input
            type="text"
            id="message"
            {...register('message')}
            placeholder="Message"
          />
          {errors.message && (
            <p className="error-message">{errors.message.message}</p>
          )}

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
