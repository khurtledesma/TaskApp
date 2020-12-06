import React from "react";
import NavElement from "./navlink.jsx";
import '../css/bootstrap.min.css'

const NavBar = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">To-DO Application </a>
      <NavElement to="/todo" label="To-Do" />
      <NavElement to="/contact" label="Contact" />
    </div>
  );
};

export default NavBar;