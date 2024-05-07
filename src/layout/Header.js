import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/icons/logo.svg';


const Header = () => {
  return (
    <header className='header'>
      <Link to='/' className='header-logo'>
        <img className='logo' src={logo} alt='logo' />
      </Link>
      <div className='right-header-nav'>
        <div className='header-menu'>
          <Link to='/about' className='header-link'>
            About
          </Link>
          <Link to='/blog' className='header-link'>
            Blog
          </Link>
          <Link to='/contact' className='header-link'>
            Contact
          </Link>
        </div>
        <div className='divider' />
        <div className='social-menu'>
          <Link to='#' className='social-link'>
            <i className='icon-rss'></i>
          </Link>
          <Link to='#' className='social-link'>
            <i className='icon-facebook'></i>
          </Link>
          <Link to='#' className='social-link'>
            <i className='icon-instagram'></i>
          </Link>
          <Link to='#' className='social-link'>
            <i className='icon-twitter'></i>
          </Link>
          <Link to='#' className='social-link'>
            <i className='icon-mail'></i>
          </Link>
        </div>
        <div className='divider' />
        <Link to='#' className='social-link'>
          <i className='icon-search'></i>
        </Link>
      </div>
    </header>
  );
};

export default Header;
