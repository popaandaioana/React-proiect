import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const {user, userLogout} = useContext(AuthContext);

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/about">About</Link>
		<Link to="/inventory">Sale for new members</Link>

                {
                    user?.uid ?
                    <>
                        <span className='text-themeWhite ml-2'>{user?.email}</span>
                        <button onClick={userLogout} className='ml-2 text-themeWhite bg-themeOrange-10 p-2 rounded'>Logout</button>
                    </>
                    :
                    <Link to="/login">Login</Link>
                }
            </div>
        </nav>
    );
};

export default Header;