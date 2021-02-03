import React from "react";

import { NavLink } from "react-router-dom";

import "../styles/Header.css";

const Header = () => {
  return (
    <div className="navigation">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/catalog">Catalog </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/about">About </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
