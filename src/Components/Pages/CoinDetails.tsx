import { Container } from '@material-ui/core';
import React from 'react';
import * as NumericInput from "react-numeric-input";
import { useState } from 'react';
import "./CBSignUp.css"


import useInput from "./Validation";
import { Link } from 'react-router-dom';

const isNotEmpty = (value:any) => value.trim() !== "";
const isEmail = (value:any) => value.includes("@" && ".");
const isPassword = (value:any) => value.trim().length >6;


const CoinDetails = (props:any) => {  
  const {
    value: socialcoinsValue,
    isValid: socialcoinsIsValid,
    hasError: socialcoinsHasError,
    valueChangeHandler: socialcoinsChangeHandler,
    // inputBlurHandler: socialcoinsBlurHandler,
    //reset: resetFirstName,
  } = useInput(isNotEmpty);
  const {
    value: membersValue,
    isValid: membersIsValid,
    hasError: membersHasError,
    valueChangeHandler: membersChangeHandler,
    // inputBlurHandler: membersBlurHandler,
    //reset: resetFirstName,
  } = useInput(isNotEmpty);
  const {
    value: followersValue,
    isValid: followersIsValid,
    hasError: followersHasError,
    valueChangeHandler: followersChangeHandler,
    // inputBlurHandler: followersBlurHandler,
    //reset: resetFirstName,
  } = useInput(isNotEmpty);
  const {
    value: platformsValue,
    isValid: platformsIsValid,
    hasError: platformsHasError,
    valueChangeHandler: platformsChangeHandler,
    // inputBlurHandler: platformsBlurHandler,
    //reset: resetFirstName,
  } = useInput(isNotEmpty);
 


  let formIsValid = false;
    
    if (socialcoinsIsValid && membersIsValid && followersIsValid && platformsIsValid ) {
    formIsValid = true;
  }

  const submitHandler = (event:any) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("Submitted!");
    console.log(socialcoinsValue, membersValue, followersValue, platformsValue);

    // resetFirstName();
    // resetLastName();
    // resetEmail();
  };

  const socialcoinsClasses = socialcoinsHasError
    ? "form-control invalid"
    : "form-control";
  const membersClasses = membersHasError
    ? "form-control invalid"
    : "form-control";
  const followersClasses = followersHasError
    ? "form-control invalid" 
    : "form-control";
  const platformsClasses = platformsHasError
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
      <div className="headingInfo"><p> Coin Details</p></div>
      <Container className="signUpForm">
        <form>          
          <div className="socialcoins">
            <label>Purpose of creating coins:</label>
            <input className="input" type="text" placeholder="purpose of coins" name="socialcoins" 
            onChange={socialcoinsChangeHandler} value={socialcoinsValue}  />
             {socialcoinsHasError && (
          <p className="error-text">Please enter a valid purpose for creating coins.</p>
        )}
          </div>
          <div className="members">
            <label>Membres in team:</label>
            <input className="input" type="number" placeholder="no of members" name="members" 
            onChange={membersChangeHandler} value={membersValue}  />
             {membersHasError && (
          <p className="error-text">Please enter a valid no of members in your team.</p>
        )}
          </div>
          <div className="followers">
            <label>No of followers:</label>
            <input className="input" type="number" placeholder="no of followers" name="followers" 
            onChange={followersChangeHandler} value={followersValue}  />
             {followersHasError && (
          <p className="error-text">Please enter no of followers.</p>
        )}
          </div>
          <div className="platforms">
            <label>Platforms having followers:</label>
            <input className="input" type="text" placeholder="platforms having followers" name="platforms" 
            onChange={platformsChangeHandler} value={platformsValue}  />
             {platformsHasError && (
          <p className="error-text">Please enter a valid platforms.</p>
        )}
          </div>         
        </form>
        <br />
        <div className="submitButton">
          <Link to="/Password">
          <button className="submit" color="primary" disabled={!formIsValid}>
            Next
          </button>
          </Link>
          
        </div>

      </Container>
    </div>

  );
};

export default CoinDetails;
