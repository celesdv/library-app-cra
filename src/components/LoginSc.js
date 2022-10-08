import React from 'react';


import { logoutUser } from '../config/firebase';

const LoginSc = () => {

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Bienvenido usuario!</h1>
      <div>
        Si estas aca, es porque sabes un monton!
      </div>
      <button onClick={logoutUser}>
        Logout
      </button>
    </div>
  );
};

export default LoginSc;