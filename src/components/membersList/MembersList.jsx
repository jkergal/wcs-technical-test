import React, { useContext } from 'react'
import './MembersList.css'
import { FirestoreDataContext } from '../../utils/context/firestoreDataContext'
import Loader from '../loader/Loader'

export default function MembersList() {
    const { members } = useContext(FirestoreDataContext)
    const { loadingData } = useContext(FirestoreDataContext)

    return (
        <>
            <div className="members-list-container">
                <h1>Membres de l&apos;équipage</h1>
                {loadingData === true ? (
                    <Loader />
                ) : (
                    members.map((member) => {
                        return (
                            <div key={member.id} className="member-wrapper">
                                - {member.name}
                            </div>
                        )
                    })
                )}

                {/* {members.map((member) => {
                    return (
                        <div key={member.id} className="member-wrapper">
                            - {member.name}
                        </div>
                    )
                })} */}
            </div>
        </>
    )
}
