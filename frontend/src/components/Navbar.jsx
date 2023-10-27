import React from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/images/logo.svg';
import Button from "./Button";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img className="navbar__logo" src={Logo} alt="logo agr" />
      <ul className="navbar__menu">
        <Link to="/">
          <Button variant="primary">My account</Button>
        </Link>
        <Link to="/login">
          <Button variant="secondary">Connexion</Button>
        </Link>
        <Link to="/signup">
          <Button variant="secondary">Create account</Button>
        </Link>
      </ul>
    </nav>
  );
}
