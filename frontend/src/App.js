import React from 'react';
import { BrowserRouter as Router, Route, Routes, Redirect  } from 'react-router-dom';
import Home from './pages/Home';
import './style/home.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Redirect from="/" to="/Profil" />
      </Routes>
    </Router>
  );
}

export default App;