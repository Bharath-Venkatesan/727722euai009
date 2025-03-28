import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiBarChart2, FiTrendingUp, FiRss, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
        
          <span className="logo-text">Social Media Analytics</span>
        </Link>
        
        {/* <div className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div> */}

        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/top-users" className="nav-links" onClick={() => setMobileMenuOpen(false)}>
              <FiBarChart2 className="nav-icon" />
              <span>Top Users</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/trending-posts" className="nav-links" onClick={() => setMobileMenuOpen(false)}>
              <FiTrendingUp className="nav-icon" />
              <span>Trending Posts</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/feed" className="nav-links" onClick={() => setMobileMenuOpen(false)}>
              <FiRss className="nav-icon" />
              <span>Live Feed</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;