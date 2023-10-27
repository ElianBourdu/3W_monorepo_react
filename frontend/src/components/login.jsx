import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/login', { email, password })
      .then((response) => {
        if (response && response.data) {
          console.log(response.data);
          setIsAuthenticated(true); 
        } else {
          console.error('Réponse invalide de la requête.');
        }
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          setError(error.response.data.error);
        } else {
          console.error('Réponse invalide de la requête.');
        }
      });
  };

  return (
    <div>
      <h1>Connexion</h1>
      {isAuthenticated ? (
        <div className="success">Connexion réussie !</div>
      ) : (
        error && <div className="error">{error}</div>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label>E-mail:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
        </div>
        <div>
          <label>Mot de passe:
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default Login;
