import React from 'react'
import './Header.css'
import logoWcs from '../../assets/images/logo-wcs-white.png'
import AddMemberForm from '../addMemberFormHeader/AddMemberFormHeader.jsx'

export default function Header() {
    return (
        <>
            <div className="header-container">
                <div className="header-wrapper">
                    <div className="main-title">
                        <img src={logoWcs} alt="school-logo" className="logo-wcs" />
                        <div className="divider-header"></div>
                        <h1>Les Argonautes</h1>
                    </div>
                    <AddMemberForm />
                </div>
            </div>
        </>
    )
}
