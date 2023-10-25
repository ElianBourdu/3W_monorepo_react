import React from "react";
import Button from "./Button";
import Logo from '../assets/images/logo.svg'

export default function Navbar() {
  return (
    <nav className="navbar">
      <img className="navbar__logo" src={Logo} alt="logo agr"/>
      <ul className="navbar__menu">
        <Button variant="primary">My account</Button>
        <Button variant="secondary">Connexion</Button>
      </ul>
    </nav>
  );
}
