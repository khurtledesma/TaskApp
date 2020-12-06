import React from "react";
import { NavLink } from "react-router-dom";
import '../css/bootstrap.min.css'

const NavElement = (props) => {
  var activeStyle = {
    color: "green",
    fontWeight: "bold"
  };

  return (

    <NavLink className="nav-link" activeStyle={activeStyle} to={props.to}>
      {props.label}
    </NavLink>
  );
};

export default NavElement;
