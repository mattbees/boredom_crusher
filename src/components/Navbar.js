import React from 'react';
import { Link } from 'react-router-dom';
// import './Navbar.css';

const Navbar = () => (
  <ul className='navbar'>
    <li>
      <Link to="/">Form</Link>
    </li>
    <li>
      <Link to="/wishlist">Wishlist</Link>
    </li>
  </ul>
)

export default Navbar;
