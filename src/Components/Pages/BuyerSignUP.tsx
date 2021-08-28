import { Container } from '@material-ui/core';
import React from 'react';
import * as NumericInput from "react-numeric-input";
import { useState } from 'react';
import "./CBSignUp.css"

const BuyerSignUp = () => {
  const [values, setValues] = useState({
    name: '',
    lastname: '',
    email: '',    
    password:'',
  });

  const handelClick = () => {
    console.log(values);
  }

  const handleChange = (event: any) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,

    });
  };


  return (
    <div className="signUp"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
      }}
    >
      <Container className="signUpForm">
        <form>
          <div className="name">
            <label>Name:</label>
            <input className="input" type="text" placeholder="name" name="name" onChange={handleChange} value={values.name} />
          </div>
          <div className="lastname">
            <label>Last Name:</label>
            <input className="input" type="text" placeholder="lastname" name="lastname" onChange={handleChange} value={values.lastname} />
          </div>
          <div className="email">
            <label>Email:</label>
            <input className="input" type="email" placeholder="email" name="email" onChange={handleChange} value={values.email} />
          </div>
          {/* <div className="socialcoins">
            <label>Purpose of creating coins:</label>
            <input className="input" type="text" placeholder="purpose of coins" name="socialcoins" onChange={handleChange} value={values.socialcoins} />
          </div>
          <div className="members">
            <label>Membres in team:</label>
            <input className="input" type="number" placeholder="no of members" name="members" onChange={handleChange} value={values.members} />
          </div>
          <div className="followers">
            <label>No of followers:</label>
            <input className="input" type="number" placeholder="no of followers" name="followers" onChange={handleChange} value={values.followers} />
          </div>
          <div className="platforms">
            <label>Platforms having followers:</label>
            <input className="input" type="text" placeholder="platforms having followers" name="platforms" onChange={handleChange} value={values.platforms} />
          </div> */}
          <div className="password">
            <label>Password:</label>
            <input className="input" type="password" placeholder="password" name="password" onChange={handleChange} value={values.password} />
          </div>
        </form>
        <br />
        <div className="submitButton">
          <button className="submit" color="primary" onClick={handelClick}>
            Submit
          </button>
        </div>

      </Container>
    </div>

  );
};

export default BuyerSignUp;
