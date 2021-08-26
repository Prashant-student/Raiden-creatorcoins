import { Container } from '@material-ui/core';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SignUp from './SignUp';

const SignIn = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
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
      <div className="gridContainer">
      <div className="gridChild1">
        <p>Welcome to Raiden</p>
        <p className="Raiden">R</p>
      </div>
      <div className="signInForm gridChild">
        <Container>
          <form className="formWrapper">
            <div className="email">
              <label>Email:</label>
              <input className="input" type="email" placeholder="email" name="email" onChange={handleChange} value={values.email} />
            </div>
            <div className="password">
              <label>Password:</label>
              <input className="input" type="password" placeholder="password" name="password" onChange={handleChange} value={values.password} />
            </div>
          </form>
          <div className="signInButton">
            <button className="submit" color="primary" onClick={handelClick}>
              Sign In
            </button>
          </div>
          <div className="newAccount">
            <Link to="/sign-up" style={
              {textDecoration:'none'}
            }>
              <p className="newAccount">Create New Account</p>
            </Link>
          </div>
        </Container>
      </div>
      </div>
      

    </div>
  )
}

export default SignIn;