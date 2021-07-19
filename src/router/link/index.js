import React from "react";
import { NavLink } from "react-router-dom";

import "./link.css";

const defaultNavLinkAttr = {
  className: "nav-link",
  activeClassName: "is-active",
};

const AppLink = ({ linkText, path }) => {
  return (
    <NavLink exact={true} {...defaultNavLinkAttr} to={path}>
      {linkText}
    </NavLink>
  );
};

export default AppLink;
