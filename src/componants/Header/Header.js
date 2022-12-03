import React, { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [open, setOpen] = useState(false);

    let menu = "Menu";
    if (open) {
        menu = "Close";
    } else {
        menu = "Menu";
    }
    console.log(open)

    return (
        <nav className='header'>
            <img src={logo} alt="" />

            <div>
                <span className='hid'><button onClick={() => setOpen(!open)} className='nav'>{menu}</button></span>
                <div className={`${open ? ' ' : 'menu'}`}>
                    <div className='fl'>
                        <Link to="/shop">Shop</Link>
                        <Link to="/orders">Order</Link>
                        <Link to="/inventory">Inventory</Link>
                        <Link to="/about">About</Link>

                        {
                            user?.uid ?
                                <button onClick={logOut} className='btn-logOut'>Log out</button>
                                :
                                <>
                                    <Link className='btn-logOut' to="/login">Log in</Link>
                                    <Link className='btn-logOut' to="/signup">Sign Up</Link>
                                </>
                        }
                        <span style={{ color: 'wheat', margin: '2px 10px' }}>{user?.email}</span>

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;