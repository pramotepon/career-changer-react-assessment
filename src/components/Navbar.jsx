import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light col-12">
      <ul className="nav ms-auto">
        <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/owner">Owner</a>
        </li>
      </ul>
    </nav>

  )
}

export default Navbar;