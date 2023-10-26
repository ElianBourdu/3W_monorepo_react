import React from "react";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <section className="header">
      <h1 className="header__title"><span>Nos agriculteurs</span>De nos régions</h1>
      <SearchBar/>
    </section>
  );
}
