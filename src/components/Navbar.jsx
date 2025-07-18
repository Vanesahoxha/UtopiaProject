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
                    to="/login"
                    className={({ isActive }) => (isActive ? 'active-link' : '')}
                >
                    Login
                </NavLink>
                <NavLink
                    to="/register"
                    className={({ isActive }) => (isActive ? 'active-link' : '')}
                >
                    Register
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
