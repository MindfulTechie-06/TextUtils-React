import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';  // ✅ Import Link

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>

          {/* Color buttons */}
          <div>
            <button onClick={() => props.onColorChange("red")} style={{ background: "red", color: "white", margin: "5px" }}>Red</button>
            <button onClick={() => props.onColorChange("blue")} style={{ background: "blue", color: "white", margin: "5px" }}>Blue</button>
            <button onClick={() => props.onColorChange("green")} style={{ background: "green", color: "white", margin: "5px" }}>Green</button>
            <button onClick={() => props.onColorChange("yellow")} style={{ background: "yellow", margin: "5px" }}>Yellow</button>
          </div>

          {/* Dark mode toggle */}
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="switchCheckDefault" />
            <label className="form-check-label" htmlFor="switchCheckDefault">{props.text}</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

// ✅ Type checking
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  togglemode: PropTypes.func.isRequired,
  onColorChange: PropTypes.func.isRequired,
};
