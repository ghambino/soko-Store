import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import Dropdown from '../navbar/Dropdown'
import Button from '../navbar/Button'


const NavigationHeader = () => {
    const [clicked, setClicked] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClicked(!clicked)
    const closeMenuList = () => setClicked(false)

    const toggleDropdown = () => {
        if (window.innerWidth > 960) {
            setDropdown(true)
        }
        else {
            setDropdown(false)
        }
    }
    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    <i className='fab fa-firstdraft'></i>
                </Link>

                <div className='nav-title'>
                    <h3>CROWN STORE</h3>
                    <p>best product at affordable price always</p>
                </div>

                <div className='menu-icon' onClick={handleClick}>
                    <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-items' >
                        <Link to='/' className='nav-link' onClick={closeMenuList}>
                            Home
                    </Link>
                    </li>
                    <li className='nav-items'>
                        <Link
                            to='/services'
                            className='nav-link'
                            onClick={closeMenuList}
                            onMouseEnter={toggleDropdown}
                            onMouseLeave={() => setDropdown(false)}
                        >

                            Services
                        <i className='fas fa-caret-down'></i>
                            {dropdown && <Dropdown />}
                        </Link>
                    </li>
                    <li className='nav-items'>
                        <Link to='/products' className='nav-link' onClick={closeMenuList}>
                            Products
                    </Link>
                    </li>
                    <li className='nav-items'>
                        <Link to='/contact-us' className='nav-link' onClick={closeMenuList}>
                            Contact Us
                    </Link>
                    </li>
                    <li>
                        <Link to='/sign-up' className='nav-link-mobile' onClick={closeMenuList}>
                            Sign Up
                    </Link>
                    </li>
                </ul>
                <Button />
            </nav>
        </>
    )
}


export default NavigationHeader
