import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <ul className="flex">
          <li>
            <Link to="/">Sign In</Link>
          </li>
          <li>
            <Link to="/dashboard"> Dashboard</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
