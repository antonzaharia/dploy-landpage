import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

export default function Header() {
    return (
        <>
            <div className="header-item logo"><img src={logo} alt="dploy-logo"/></div>
            <div  className="header-item head-links">
                <Link to="/marketplace">Marketplace</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/how-it-works">How it works</Link>
            </div>
            <div className="header-item">
                <Link to="/" className="login-btn">Login</Link>
                <Link  to="/" className="dev-btn">For Developers</Link>
            </div>
            <div>
                <Link  to="/" className="menu-btn">Menu</Link>
            </div>
        </>
    )
}
