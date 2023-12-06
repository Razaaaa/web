import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
    } from "mdb-react-ui-kit";
    import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './Order.css';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
    
export default function Order() {
  const navigate = useNavigate()
    const schema = yup.object().shape({
      doctorname: yup.string().required('Specialization of Doctor is Required'),
      consultationdate: yup.string().required('Date is Required'),
      consultationtime: yup
        .string()
        .required('Time is Required'),
      reason: yup.string().required('Enter a Reason'),
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
      axios.post("http://localhost:8082/order",data)
      navigate('/users/dashboard');
      reset();
      
    } catch (error) {
    console.log(data)
      
    }
  };
  
    return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard>
              <MDBCardBody className="p-4">
                <MDBRow>
                  <MDBCol lg="7">
                    <MDBTypography tag="h5">
                    <Link to='/users/book-appointments'><a href="#!" className="text-body">
                        <MDBIcon fas icon="long-arrow-alt-left me-2" /> Back
                      </a></Link>
                    </MDBTypography>
    
                    <hr />
    
                
    
                    <MDBCard className="mb-3">
                      <MDBCardBody>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex flex-row align-items-center">
                            
                            <div className="ms-3">
                              <MDBTypography tag="h5">
                                Doctor Consulation Fee
                              </MDBTypography>
                              <MDBInput className="mb-4" type="text" size="lg"  {...register('doctorname')}
                              placeholder="Specialization Name" contrast />
                               {errors.email && (
                                  <p className="red-error">{errors.doctorname.message}</p>
                                )}
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center">
                            <div style={{ width: "80px" }}>
                              <MDBTypography tag="h5" className="mb-0">
                                Rs.4000
                              </MDBTypography>
                            </div>
                            <a href="#!" style={{ color: "#cecece" }}>
                              <MDBIcon fas icon="trash-alt" />
                            </a>
                          </div>
                        </div>
                        <MDBInput className="mb-4" type="date" size="lg" {...register('consultationdate')}
                            placeholder="Date" contrast />
                            {errors.email && (
                              <p className="red-error">{errors.consultationdate.message}</p>
                            )}
                        <MDBInput className="mb-4" type="time" size="lg" {...register('consultationtime')}
                            placeholder="Time of Meeting" contrast />
                            {errors.email && (
                              <p className="red-error">{errors.consultationtime.message}</p>
                            )}
                        <MDBInput className="mb-4" type="text" size="lg" {...register('reason')}
                            placeholder="Reason for Consultation" contrast />   
                            {errors.email && (
                              <p className="red-error">{errors.reason.message}</p>
                            )} 
                      </MDBCardBody>
                    </MDBCard>   
                  </MDBCol>
    
                  <MDBCol lg="5">
                    <MDBCard className="bg-primary text-white rounded-3">
                      <MDBCardBody>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <MDBTypography tag="h5" className="mb-0">
                            Card details
                          </MDBTypography>
                          
                        </div>
    
                        <p className="small">Card type</p>
                        <a href="#!" type="submit" className="text-white">
                          <MDBIcon fab icon="cc-mastercard fa-2x me-2" />
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <MDBIcon fab icon="cc-visa fa-2x me-2" />
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <MDBIcon fab icon="cc-amex fa-2x me-2" />
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <MDBIcon fab icon="cc-paypal fa-2x me-2" />
                        </a>
    
                        <form onSubmit={handleSubmit(handleFormSubmit)} className="mt-4">
                          <MDBInput className="mb-4" label="Cardholder's Name" type="text" size="lg"
                            placeholder="Cardholder's Name" contrast />
    
                          <MDBInput className="mb-4" label="Card Number" type="text" size="lg"
                            minLength="19" maxLength="19" placeholder="1234 5678 9012 3457" contrast />
    
                          <MDBRow className="mb-4">
                            <MDBCol md="6">
                              <MDBInput className="mb-4" label="Expiration" type="text" size="lg"
                                minLength="7" maxLength="7" placeholder="MM/YYYY" contrast />
                            </MDBCol>
                            <MDBCol md="6">
                              <MDBInput className="mb-4" label="Cvv" type="text" size="lg" minLength="3"
                                maxLength="3" placeholder="&#9679;&#9679;&#9679;" contrast />
                            </MDBCol>
                          </MDBRow>
                          <button type="submit">Checkout</button>
                        </form>
    
                        <hr />
    
                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Subtotal</p>
                          <p className="mb-2">Rs.4000</p>
                        </div>
    
                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Platform Fee</p>
                          <p className="mb-2">Rs.200</p>
                        </div>
    
                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Total(Incl. taxes)</p>
                          <p className="mb-2">Rs.4280</p>
                        </div>
    
                        <MDBBtn color="info" block size="lg">
                          <div className="d-flex justify-content-between">
                            <span>
                              
                              <i className="fas fa-long-arrow-alt-right ms-2"></i>
                            </span>
                          </div>
                        </MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    );
    }