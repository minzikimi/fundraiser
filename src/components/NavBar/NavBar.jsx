import React from 'react';
import { Link } from 'react-router-dom'; 
const NavBar = () => {
  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/how-it-works">How It Works</Link>
          </li>
          <li>
            <Link to="/thank-you">Thank You(temporary)</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
