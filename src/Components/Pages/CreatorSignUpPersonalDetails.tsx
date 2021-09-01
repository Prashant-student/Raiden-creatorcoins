import { Container } from '@material-ui/core';
import React from 'react';
import * as NumericInput from "react-numeric-input";
import { useState } from 'react';
import "./SignUp/CBSignUp.css"


import useInput from "./Validation";
import { Link } from 'react-router-dom';

const isNotEmpty = (value: any) => value.trim() !== "";
const isEmail = (value: any) => value.includes("@" && ".");
const isPassword = (value: any) => value.trim().length > 6;


const CreatorSignUp = (props: any) => {
  const {
    value: FullnameValue,
    isValid: FullnameIsValid,
    hasError: FullnameHasError,
    valueChangeHandler: FullnameChangeHandler,
    // inputBlurHandler: FullnameBlurHandler,
    //reset: resetFirstName,
  } = useInput(isNotEmpty);
  const {
    value: UsernameValue,
    isValid: UsernameIsValid,
    hasError: UsernameHasError,
    valueChangeHandler: UsernameChangeHandler,
    // inputBlurHandler: UsernameBlurHandler,
    //reset: resetFirstName,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    // inputBlurHandler: emailBlurHandler,
    //reset: resetFirstName,
  } = useInput(isEmail);



  let formIsValid = false;

  if (FullnameIsValid && UsernameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event: any) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("Submitted!");
    console.log(FullnameValue, UsernameValue, emailValue);

    // resetFirstName();
    // resetLastName();
    // resetEmail();
  };

  const FullnameClasses = FullnameHasError
    ? "form-control invalid"
    : "form-control";
  const UsernameClasses = UsernameHasError
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";

  return (
    <div className="signUp"
      style={{
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <div className="headingInfo"><p>Personal Details</p></div>
      <Container className="signUpForm">
        <form>
          <div className="Fullname">
            <label>Name:</label>
            <input className="input" type="text" placeholder="Fullname" name="name"
              onChange={FullnameChangeHandler} value={FullnameValue} />
            {FullnameHasError && (
              <p className="error-text">Please enter a name.</p>
            )}
          </div>
          <div className="Username">
            <label>Last Name:</label>
            <input className="input" type="text" placeholder="Username" name="lastname"
              onChange={UsernameChangeHandler} value={UsernameValue} />
            {UsernameHasError && (
              <p className="error-text">Please enter a Username.</p>
            )}
          </div>
          <div className="email">
            <label>Email:</label>
            <input className="input" type="email" placeholder="email" name="email"
              onChange={emailChangeHandler} value={emailValue} />
            {emailHasError && (
              <p className="error-text">Please enter a valid email address.</p>
            )}
          </div>
        </form>
        <br />
        <div className="submitButton">
          <Link to="/CoinDetails">
            <button className="submit" color="primary" disabled={!formIsValid}>Next</button>
          </Link>

        </div>

      </Container>
    </div>

  );
};

export default CreatorSignUp;
