import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import { registerUser } from '../../config/firebase';

const Register = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleEmail = event => {
    setEmail(event.target.value);
  };

  const handlePassword = event => {
    setPassword(event.target.value);
  };

    //-----------------------
    const handleRegister = () => {
        registerUser(email, password)
          .then((userCredential) => {
            alert('User created successfully!')
          })
          .catch((error) => {
            alert('Something went wrong!')
            const errorCode = error.code;
            console.log(errorCode);
          });
      }
    // ----------------------   

  return (
    <div style={{ textAlign: 'center' }}>
      <div>
        <h3>Register</h3>
      </div>
      <div>
        <input
          value={email}
          onChange={handleEmail}
          placeholder="Type your e-mail"
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          onChange={handlePassword}
          placeholder="Type your password"
        />
      </div>
      <button onClick={handleRegister}>
        Submit
      </button>
      <div style={{ fontSize: '12px' }}>
          Already have an account? Please {' '}
          <span 
            onClick={() => navigate('/login')}
            style={{ color: '#293462', fontWeight: 'bold', cursor: 'pointer' }}
          >
            sign in
          </span>
      </div>
    </div>
  );
};

export default Register;