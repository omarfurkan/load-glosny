import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-container'>
            <img src={logo} alt="" />
            <nav>
                <Link to='/home'>Home</Link>
                <Link to='/reviews'>Reviews</Link>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/blogs'>Blogs</Link>
                <Link to='/about'>About</Link>
            </nav>
        </div>
    );
};

export default Header;