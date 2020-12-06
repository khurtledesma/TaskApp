import React from "react";
import { NavLink } from "react-router-dom";
import '../css/bootstrap.min.css'

const NavElement = (props) => {
  var activeStyle = {
    color: "white",
    fontWeight: "bold",
    textDecorationLine: "underline",
  };

  return (
    <NavLink className="nav-link text-light" activeStyle={activeStyle} to={props.to}>
      {props.label}
    </NavLink>
  );
};

export default NavElement;
