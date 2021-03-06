import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Link to='/' >Home</Link>
            <Link to='/about' >About</Link>
            <Link to='/products' >Products</Link>
            <Link to='/register' >Register</Link>
            <Link to='/login'>Login</Link>
        </div>
    );
};

export default Header;