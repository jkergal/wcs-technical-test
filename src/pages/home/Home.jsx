import React from 'react'
// import AddMemberForm from '../../components/addMemberForm/AddMemberForm'
import MembersList from '../../components/membersList/MembersList'
import './Home.css'

export default function Home() {
    return (
        <>
            <div className="home-container">
                <div className="members-list-wrapper">
                    <MembersList />
                </div>
            </div>
        </>
    )
}
