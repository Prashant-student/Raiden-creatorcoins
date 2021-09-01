import { Container } from '@material-ui/core';
import React from 'react';
import * as NumericInput from "react-numeric-input";
import { useState } from 'react';
import { withRouter } from "react-router";
import "./SignIn/SignIn.css"


import useInput from "./Validation";
import { Link } from 'react-router-dom';

const isNotEmpty = (value: any) => value.trim() !== "";
const isEmail = (value: any) => value.includes("@" && ".");
const isPassword = (value: any) => value.trim().length > 6;


const SignIn = (props: any) => {



  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    // inputBlurHandler: passwordBlurHandler,
    // //reset: resetFirstName,
  } = useInput(isPassword);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    // inputBlurHandler: ConfirmPasswordBlurHandler,
    //reset: resetFirstName,
  } = useInput(isPassword);



  let formIsValid = false;

  if (passwordIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event: any) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("Submitted!");
    console.log(passwordValue, emailValue);

    // resetFirstName();
    // resetLastName();
    // resetEmail();
  };

  const passwordClasses = passwordHasError
    ? "form-control invalid"
    : "form-control";
  const ConfirmPasswordClasses = emailHasError
    ? "form-control invalid"
    : "form-control";




  return (
    <div className="signUp"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
        width: '100%'
      }}
    >
      <div className="gridContainer">
        <div className="gridChild1">
          <p>Welcome to Raiden</p>
          <p className="Raiden">R</p>
        </div>
        <div className="signInFormGridChild">
          <Container style ={{
            justifyContent: 'center'
          }}>
            <form className="formWrapper">
              <div className="email">
                <label>Email:</label>
                <input className="input" type="email" placeholder="email" name="email"
                  onChange={emailChangeHandler} value={emailValue} />
                {emailHasError && (
                  <p className="error-text">Please enter a valid email address.</p>
                )}
              </div>
              <div className="password">
                <label>Password:</label>
                <input className="input" type="password" placeholder="password" name="password"
                  onChange={passwordChangeHandler} value={passwordValue} />
                {passwordHasError && (
                  <p className="error-text">Please enter a password having more than 6 characters.</p>
                )}
              </div>
            </form>

            <div className="btn">
              <Link to="/" style={{
                color: "black",
                textDecoration: "none",
                padding: "10px",
                textAlign: "center"
                
              }}>
                <button className="BtnSignIn" color="primary" disabled={!formIsValid}>Sign In</button>
              </Link>
            </div>
          </Container>
        </div>
      </div>


    </div >
  )
}


export default SignIn;