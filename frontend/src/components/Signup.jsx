import axios from 'axios';
import React, { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [localisation, setLocalisation] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handlelocalisationChange = (e) => {
    setLocalisation(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   

   
    axios.post('http://localhost:8000/signups', {email, firstName, lastName, password, localisation })
    .then((response) => {
      setSuccess(response.data.message); 
      setError(''); 
    })
    .catch((error) => {
      setError(error.response.data.error); 
      setSuccess(''); 
    });
  };

  return (
    <div>
      <h1>Inscription</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Prénom :
            <input type="text" value={firstName} onChange={handleFirstNameChange} />
          </label>
        </div>
        <div>
          <label>Nom de famille :
            <input type="text" value={lastName} onChange={handleLastNameChange} />
          </label>
        </div>
        <div>
          <label>localisation :
            <input type="text" value={localisation} onChange={handlelocalisationChange} />
          </label>
        </div>
        <div>
          <label>Email :
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
        </div>
        <div>
          <label>Mot de passe :
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
        </div>
        <div>
            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">{success}</div>}
        </div>
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default Signup;
