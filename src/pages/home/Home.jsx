import React from 'react'
import MembersList from '../../components/membersList/MembersList'
import './Home.css'

export default function Home() {
    return (
        <>
            <div className="home-container">
                <MembersList />
            </div>
        </>
    )
}
