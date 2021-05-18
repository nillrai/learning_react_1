import React from "react";
import "./header.scss";
import Logo from "./Logo";
import Search from "./Search";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header>
      <div className="header-content">
        <Logo />
        <Search />
        <Navigation/>
      </div>
    </header>
  );
}
