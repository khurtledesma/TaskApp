import React from "react";
import NavElement from "./navelem.jsx";

const NavBar = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavElement className="navbar-brand" to="/todo" label="Shopping List" />
      <NavElement to="/contact" label="Contact" />
    </div>
  );
};

export default NavBar;