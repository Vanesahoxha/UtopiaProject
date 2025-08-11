import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="/logo.png" alt="Utopia Logo" />
            </div>
            <div className="navbar-links">
                <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? 'active-link' : '')}
                    end
                >
                    Home
                </NavLink>
                <NavLink
                    to="/projects"
                    className={({ isActive }) => (isActive ? 'active-link' : '')}
                >
                    Projects
                </NavLink>
                <NavLink
                    to="/sounds"
                    className={({ isActive }) => (isActive ? 'active-link' : '')}
                >
                    Sounds
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) => (isActive ? 'active-link' : '')}
                >
                    Contact Us
                </NavLink>
                <NavLink
                    to="/logIn"
                    className={({ isActive }) => (isActive ? 'active-link' : '')}
                >
                    Log In
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
