import React from 'react';
import './Nav.css';
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark fixed-top">
        <div className="container-fluid">

          {/* Logo */}
          <div className="logo" style={{ paddingLeft: '2rem' }}>
            <h1>PortFolio</h1>
          </div>

          {/* Hamburger Button */}
          <button
            className="navbar-toggler text-white" type="button" data-bs-toggle="collapse"data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon" style={{}} ></span>
          </button>

          {/* Menu Items */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 temp color " style={{ gap: '2rem', alignItems: 'center' }}>

              <li className="nav-item  ">

                <Link to="home" smooth={true} spy={true}duration={500} activeClass="active"className="nav-link"  >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link to="about" smooth={true} spy={true}duration={500} activeClass="active"className="nav-link">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link to="project" smooth={true} spy={true}duration={500} activeClass="active"className="nav-link" >
                  Project
                </Link>
              </li>

              <li className="nav-item">
                <Link to="services" smooth={true} spy={true}duration={500} activeClass="active"className="nav-link" >
                  Services
                </Link>
              </li>

              <li className="nav-item">
                <Link to="contact" smooth={true} spy={true}duration={500} activeClass="active"className="nav-link">
                  Contact
                </Link>
              </li>

              

            </ul>
          </div>

        </div>
      </nav>
    </>
  );
};

export default Nav;
