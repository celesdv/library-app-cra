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
            alert('Usuario creado correctamente')
          })
          .catch((error) => {
            alert('Algo salió mal :(')
            const errorCode = error.code;
            console.log(errorCode);
          });
      }
    // ----------------------   

  return (
    <div style={{ textAlign: 'center' }}>
      <div>
        <h3>Registro</h3>
      </div>
      <div>
        <input
          value={email}
          onChange={handleEmail}
          placeholder="Escribi un e-mail"
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          onChange={handlePassword}
          placeholder="Escribi una contraseña"
        />
      </div>
      <button onClick={handleRegister}>
        Enviar
      </button>
      <div style={{ fontSize: '12px' }}>
          ¿Ya tenes una cuenta? {' '}
          <span 
            onClick={() => navigate('/login')}
            style={{ color: '#293462', fontWeight: 'bold', cursor: 'pointer' }}
          >
            Inicia Sesion
          </span>
      </div>
    </div>
  );
};

export default Register;