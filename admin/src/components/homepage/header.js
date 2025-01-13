
import React from 'react';
import "./header.css"
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
        <p>AdminPanel</p>
      <nav>
        <ul>
          <li><Link to="/home/hotels">Home</Link></li>
          <li><Link to="/home/adddata">Add Data</Link></li>
          <li><Link to="/request">Notification</Link></li>
        </ul>
      </nav>
      <div className="user-actions">
        <Link to="/logout">Logout</Link>
      </div>
    </header>
  );
}

export default Header;
