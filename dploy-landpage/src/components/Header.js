import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <div className="header-item"><p className="logo">d-ploy</p></div>
            <div  className="header-item head-links">
                <Link to="/marketplace">Marketplace</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/how-it-works">How it works</Link>
            </div>
            <div className="header-item">
                <Link class="login-btn">Login</Link>
                <Link class="dev-btn">For Developers</Link>
            </div>
        </>
    )
}