import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <nav className="nav">
                    <div className="logo">
                        <span className="logo-name">Durbek</span>
                        <span className="logo-tech">/ Node.js</span>
                    </div>
                    <div className="nav-links">
                        <NavLink to="/">About</NavLink>
                        <NavLink to="/">Skills</NavLink>
                        <NavLink to="/">Contacts</NavLink>
                    </div>
                </nav>
            </div>
        </header>
    );
}
