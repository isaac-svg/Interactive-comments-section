import React from "react";
import { Link } from "react-router-dom";
// styled from index.css
const Nav = () => {
  return (
    <nav className="header">
      <ul>
        <li>
          <a>Username</a>
        </li>
        <li>
          <a>Logout</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
