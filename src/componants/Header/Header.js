import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/About">About</Link>
                {
                    user?.uid ?
                        <button onClick={logOut} className='btn-logOut'>Log out</button>
                        :
                        <>
                            <Link to="/login">Log in</Link>
                            <Link to="/signup">Sign Up</Link>
                        </>
                }
                <span>{user?.email}</span>
            </div>
        </nav>
    );
};

export default Header;