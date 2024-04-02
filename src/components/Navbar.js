import React from 'react';
import Logo from '../assets/images/Logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="" width="30" height="24" className="d-inline-block align-text-top mx-2" />
            FitHub
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Exercises</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/food">Foods</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/disease">Disease</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pushup">FitTest</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/diet">Diet</Link>
              </li>

            </ul>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar