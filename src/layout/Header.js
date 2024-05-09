import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/icons/logo.svg';

const Header = () => {
  return (
    <header className='navbar navbar-expand-md'>
      <div className='container'>
        <div className='col-lg-6'>
          <Link className='navbar-brand' to='#'>
            <img src={logo} alt='logo' />
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarToggler'
            aria-controls='navbarToggler'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
        </div>
        <div className='collapse navbar-collapse col-lg-6 justify-content-end' id='navbarToggler'>
          <ul className='navbar-nav mb-2 mb-lg-0 site-links'>
            <li className='nav-item'>
              <Link className='nav-link' to='/about'>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/blog'>
                Blog
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/contact'>
                Contact
              </Link>
            </li>
          </ul>
          <div className='divider' />
          <ul className='navbar-nav mb-2 mb-lg-0 social-links'>
            <li className='nav-item'>
              <Link className='nav-link' to='#'>
                <i className='icon-facebook'></i>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='#'>
                <i className='icon-instagram'></i>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/contact'>
                <i className='icon-twitter'></i>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/contact'>
                <i className='icon-mail'></i>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/contact'>
                <i className='icon-rss'></i>
              </Link>
            </li>
          </ul>
          <div className='divider'></div>
          <Link to='#' className='nav-link'>
            <i className='icon-search'></i>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
