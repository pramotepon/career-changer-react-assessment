import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light col-12">
      <ul className="nav ms-auto">
        <li className="nav-item">
          <Link to={'/'} className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to={'/owner'} className="nav-link">Owner</Link>
        </li>
      </ul>
    </nav>

  )
}

export default Navbar;