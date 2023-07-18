import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/OntheGoRentals-Logo-Round-Clear.PNG';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-custom">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img alt="Logo" className="logo" src={logo} />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/nav/user/login" className="nav-link">
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/nav/user/signup" className="nav-link">
                                    Signup
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/admin" className="nav-link">
                                    Admin Dashboard
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
