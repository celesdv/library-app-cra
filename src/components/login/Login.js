import React, { useState } from 'react';
import { loginUser } from '../../config/firebase';

// usamos este hook para navegar entre paginas
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleEmail = event => {
    setEmail(event.target.value);
  };

  const handlePassword = event => {
    setPassword(event.target.value);
  };

  // ------------------------------------

  const handleSubmit = () => {
    loginUser(email, password)
      .then((userCredential) => {
        alert('Iniciaste Correctamente');
        navigate('/booksform');
      })
      .catch((error) => {
        alert('Algo salió mal :(');
        const errorCode = error.code;
        console.log(errorCode);
      });
  };

  // ------------------------------------

  return (
    <div style={{ textAlign: 'center' }}>
      <div>
        <h3>Iniciar</h3>
      </div>
      <div>
        <input
          value={email}
          onChange={handleEmail}
          placeholder="Ingresa tu e-mail"
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          onChange={handlePassword}
          placeholder="Ingresa tu contraseña"
        />
      </div>
      <button onClick={handleSubmit}>
        Enviar
      </button>
      <div style={{ fontSize: '12px' }}>
          ¿No tenes una cuenta? Registrate {' '}
          <span 
            onClick={() => navigate('/register')}
            style={{ color: '#293462', fontWeight: 'bold', cursor: 'pointer' }}
          >
            Aca
          </span>
      </div>
    </div>
  );
};

export default Login;