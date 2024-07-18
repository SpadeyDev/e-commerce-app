import React, { useEffect } from 'react';
import Logo from './Logo';
import '../css/Header.css';
import { CiHeart } from 'react-icons/ci';
import { CiShoppingCart } from 'react-icons/ci';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';


function Header() {
  
    if(localStorage.length > 0) {

    }

  return (
    <div className="main-header">
      <div className="left-section">
        <Logo/>
      </div>
      <div className="center-section">
        <ul>
          <li>
            <a href="" style={{textDecoration: 'underline'}}> Home </a>
          </li>
          <li>
          <a href=""> Contact </a>
          </li>
          <li>
          <a href=""> About </a>
          </li>
        </ul>
      </div>
      <div className="right-section">
        <input className='searchBar' type="text" placeholder='What are you looking for?'/>
        <CiHeart className="icon" />

        <Badge badgeContent={localStorage.length} color="error">
          <Link to="/basket"><CiShoppingCart className="icon" /></Link>
        </Badge>
      </div>
    </div>
  );
}

export default Header;
