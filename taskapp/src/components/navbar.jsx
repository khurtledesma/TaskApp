import React from "react";
import NavElement from "./navlink.jsx";

const NavBar = () => {
  return (
    <div>
      <NavElement to="/todo" label="To-Do" />
      <NavElement to="/contact" label="Contact" />
    </div>
  );
};

export default NavBar;