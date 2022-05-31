import React, { useContext } from 'react'
import './MembersList.css'
import { FirestoreDataContext } from '../../utils/context/firestoreDataContext'
import Loader from '../loader/Loader'

export default function MembersList() {
    // const { members } = useContext(FirestoreDataContext)
    const { splittedMembers } = useContext(FirestoreDataContext)
    const { loadingData } = useContext(FirestoreDataContext)

    return (
        <>
            <div className="members-list-container">
                <h1>Membres de l&apos;équipage</h1>
                {loadingData === true ? (
                    <Loader />
                ) : (
                    <div className="members-list-grid">
                        <div className="column-member-1">
                            {splittedMembers.column1.map((member) => {
                                return (
                                    <div key={member.id} className="member-wrapper">
                                        - {member.name}
                                    </div>
                                )
                            })}
                        </div>

                        <div className="column-member-2">
                            {splittedMembers.column2.map((member) => {
                                return (
                                    <div key={member.id} className="member-wrapper">
                                        - {member.name}
                                    </div>
                                )
                            })}
                        </div>

                        <div className="column-member-3">
                            {splittedMembers.column3.map((member) => {
                                return (
                                    <div key={member.id} className="member-wrapper">
                                        - {member.name}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
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
