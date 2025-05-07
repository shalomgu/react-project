import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Import CSS for styling

function Header() {
    return (
        <header className="navbar">
            <nav className="nav-container">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/log" className="nav-link">Log Page</Link>
                <Link to="/login" className="nav-link">Login</Link>
                <Link to="/search" className="nav-link">Search</Link>
                <Link to="/ship" className="nav-link">Ship</Link>
            </nav>
        </header>
    );
}

export default Header; 