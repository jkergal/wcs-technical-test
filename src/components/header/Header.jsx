import React from 'react'
import './Header.css'
import logoWcs from '../../assets/images/logo-wcs.png'

export default function Header() {
    return (
        <>
            <div className="header-container">
                <img src={logoWcs} alt="school-logo" className="logo-wcs" />
                <h1>Les Argonautes</h1>
            </div>
        </>
    )
}
