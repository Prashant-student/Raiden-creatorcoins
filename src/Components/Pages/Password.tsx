import { Container } from '@material-ui/core';
import React from 'react';
import * as NumericInput from "react-numeric-input";
import { useState } from 'react';
import { withRouter } from "react-router";
import "./CBSignUp.css"


import useInput from "./Validation";
import { Link } from 'react-router-dom';

const isNotEmpty = (value: any) => value.trim() !== "";
const isEmail = (value: any) => value.includes("@" && ".");
const isPassword = (value: any) => value.trim().length > 6;


const CreatorSignUp = (props: any) => {
    

    
  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    // inputBlurHandler: passwordBlurHandler,
    // //reset: resetFirstName,
  } = useInput(isPassword);
  const {
    value: ConfirmPasswordValue,
    isValid: ConfirmPasswordIsValid,
    hasError: ConfirmPasswordHasError,
    valueChangeHandler: ConfirmPasswordChangeHandler,
    // inputBlurHandler: ConfirmPasswordBlurHandler,
    //reset: resetFirstName,
  } = useInput(isPassword);



  let formIsValid = false;

  if (passwordIsValid && ConfirmPasswordIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event: any) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("Submitted!");
    console.log(passwordValue, ConfirmPasswordValue);

    // resetFirstName();
    // resetLastName();
    // resetEmail();
  };

  const passwordClasses = passwordHasError
    ? "form-control invalid"
    : "form-control";
  const ConfirmPasswordClasses = ConfirmPasswordHasError
    ? "form-control invalid"
    : "form-control";
  

  return (
    <div className="signUp"
      style={{
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <div className="headingInfo"><p>Password</p></div>
      <Container className="signUpForm">
        <form>          
          <div className="password">
            <label>Password:</label>
            <input className="input" type="password" placeholder="password" name="password" 
            onChange={passwordChangeHandler} value={passwordValue}  />
             {passwordHasError && (
          <p className="error-text">Please enter a password having more than 6 characters.</p>
        )}
          </div>
          <div className="Confirmpassword">
            <label>Confirm Password:</label>
            <input className="input" type="password" placeholder="Confirm password" name="Confirm password" 
            onChange={ConfirmPasswordChangeHandler} value={ConfirmPasswordValue}  />
             {ConfirmPasswordHasError && (
          <p className="error-text">Please enter a same password.</p>
        )}
          </div>
        </form>
        <br />
        <div className="btn">
          <Link to="/sign-in">
            <button className="submit" color="primary" disabled={!formIsValid}>Register</button>
          </Link>

        </div>

      </Container>
    </div>

  );
};

export default CreatorSignUp;
