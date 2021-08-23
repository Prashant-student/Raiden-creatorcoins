import React from 'react';

const SignUp = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
      }}
    >
      <form>
        <label>
          Name:
          <input type="text" name="name" />
          <br />
          Last Name:
          <input type="text" name="LastName" />
        </label>
      </form>
    </div>
  );
};

export default SignUp;
