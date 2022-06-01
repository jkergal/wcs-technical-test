import React, { useContext } from 'react'
import './MembersList.css'
import { FirestoreDataContext } from '../../utils/context/firestoreDataContext'
import Loader from '../loader/Loader'

export default function MembersList() {
    const { splittedMembers } = useContext(FirestoreDataContext)
    const { members } = useContext(FirestoreDataContext)
    const { loadingData } = useContext(FirestoreDataContext)

    return (
        <>
            <div className="members-list-container">
                {loadingData === true ? (
                    <Loader />
                ) : (
                    (() => {
                        switch (members.length) {
                            case 0:
                                return (
                                    <p>
                                        <i>
                                            Le recrutement n&apos;a pas encore commencé, il va
                                            falloir songer à se presser Capitaine !
                                        </i>
                                    </p>
                                )
                            case 1:
                                return (
                                    <>
                                        <h1>Membres de l&apos;équipage</h1>
                                        <div className="column-member-1">
                                            {splittedMembers.column1.map((member) => {
                                                return (
                                                    <div key={member.id} className="member-wrapper">
                                                        {member.name}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </>
                                )

                            case 2:
                                return (
                                    <>
                                        <h1>Membres de l&apos;équipage</h1>
                                        <div className="members-list-grid-2-columns">
                                            <div className="column-member-1">
                                                {splittedMembers.column1.map((member) => {
                                                    return (
                                                        <div
                                                            key={member.id}
                                                            className="member-wrapper">
                                                            {member.name}
                                                        </div>
                                                    )
                                                })}
                                            </div>

                                            <div className="column-member-2">
                                                {splittedMembers.column2.map((member) => {
                                                    return (
                                                        <div
                                                            key={member.id}
                                                            className="member-wrapper">
                                                            {member.name}
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </>
                                )

                            default:
                                return (
                                    <>
                                        <h1>Membres de l&apos;équipage</h1>
                                        <div className="members-list-grid-3-columns">
                                            <div className="column-member-1">
                                                {splittedMembers.column1.map((member) => {
                                                    return (
                                                        <div
                                                            key={member.id}
                                                            className="member-wrapper">
                                                            {member.name}
                                                        </div>
                                                    )
                                                })}
                                            </div>

                                            <div className="column-member-2">
                                                {splittedMembers.column2.map((member) => {
                                                    return (
                                                        <div
                                                            key={member.id}
                                                            className="member-wrapper">
                                                            {member.name}
                                                        </div>
                                                    )
                                                })}
                                            </div>

                                            <div className="column-member-3">
                                                {splittedMembers.column3.map((member) => {
                                                    return (
                                                        <div
                                                            key={member.id}
                                                            className="member-wrapper">
                                                            {member.name}
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </>
                                )
                        }
                    })()
                )}
            </div>
        </>
    )
}
