import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faList, faTags, faSearch, faSignInAlt, faPen, faInfoCircle, faEnvelope, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div className="navbar-header">
          <img src={logo} alt="Logo" className="logo" />
          <Link className="navbar-brand" to="/">Anime Fusion</Link>
        </div>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">
            <div className="icon-bar"></div>
            <div className="icon-bar"></div>
            <div className="icon-bar"></div>
          </span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <FontAwesomeIcon icon={faHome} /> Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                List
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/anime">
                  <FontAwesomeIcon icon={faList}  /> Anime List
                </Link>
                <Link className="dropdown-item" to="/movie">
                  <FontAwesomeIcon icon={faList}  /> Movie List
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/genres">
                <FontAwesomeIcon icon={faTags} /> Genres
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                <FontAwesomeIcon icon={faPen} /> Blog
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                More
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/about">
                  <FontAwesomeIcon icon={faInfoCircle} /> About Us
                </Link>
                <Link className="dropdown-item" to="/contact">
                  <FontAwesomeIcon icon={faEnvelope} /> Contact Us
                </Link>
                <Link className="dropdown-item" to="/faq">
                  <FontAwesomeIcon icon={faQuestionCircle} /> FAQ
                </Link>
              </div>
            </li>
          </ul>
          <div className="navbar-icons">
            <Link className="nav-icon" to="/search">
              <FontAwesomeIcon icon={faSearch} />
            </Link>
            <Link className="btn btn-login" to="/login">
              <FontAwesomeIcon icon={faSignInAlt} /> Login
            </Link>
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
