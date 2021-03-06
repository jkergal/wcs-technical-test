import React, { useContext } from 'react'
import './MembersList.css'
import { FirestoreDataContext } from '../../utils/context/firestoreDataContext'
import Loader from '../loader/Loader'

export default function MembersList() {
    const { splittedMembers } = useContext(FirestoreDataContext)
    const { members } = useContext(FirestoreDataContext)
    const { loadingData } = useContext(FirestoreDataContext)
    const { updateNumber } = useContext(FirestoreDataContext)

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
                                        <div className="members-list-title">
                                            <h2>Membres de l&apos;équipage</h2>
                                        </div>
                                        <div className="divider-horizontal"></div>
                                        <div className="column-member">
                                            {splittedMembers.column1.map((member, i) => {
                                                i++
                                                if (
                                                    i === splittedMembers.column1.length &&
                                                    updateNumber > 1
                                                ) {
                                                    return (
                                                        <div
                                                            key={member.id}
                                                            className="member-wrapper-green">
                                                            {member.name}
                                                        </div>
                                                    )
                                                } else {
                                                    return (
                                                        <div
                                                            key={member.id}
                                                            className="member-wrapper">
                                                            {member.name}
                                                        </div>
                                                    )
                                                }
                                            })}
                                        </div>
                                    </>
                                )

                            case 2:
                                return (
                                    <>
                                        <div className="members-list-title">
                                            <h2>Membres de l&apos;équipage</h2>
                                        </div>
                                        <div className="divider-horizontal"></div>
                                        <div className="members-list-grid-2-columns">
                                            <div className="column-member">
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

                                            <div className="column-member">
                                                {splittedMembers.column2.map((member, i) => {
                                                    i++
                                                    if (
                                                        i === splittedMembers.column2.length &&
                                                        updateNumber > 1
                                                    ) {
                                                        return (
                                                            <div
                                                                key={member.id}
                                                                className="member-wrapper-green">
                                                                {member.name}
                                                            </div>
                                                        )
                                                    } else {
                                                        return (
                                                            <div
                                                                key={member.id}
                                                                className="member-wrapper">
                                                                {member.name}
                                                            </div>
                                                        )
                                                    }
                                                })}
                                            </div>
                                        </div>
                                    </>
                                )

                            default:
                                return (
                                    <>
                                        <div className="members-list-title">
                                            <h2>Membres de l&apos;équipage</h2>
                                        </div>
                                        <div className="divider-horizontal"></div>
                                        <div className="members-list-grid-3-columns">
                                            <div className="column-member">
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

                                            <div className="column-member">
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

                                            <div className="column-member">
                                                {splittedMembers.column3.map((member, i) => {
                                                    i++
                                                    if (
                                                        i === splittedMembers.column3.length &&
                                                        updateNumber > 1
                                                    ) {
                                                        return (
                                                            <div
                                                                key={member.id}
                                                                className="member-wrapper-green">
                                                                {member.name}
                                                            </div>
                                                        )
                                                    } else {
                                                        return (
                                                            <div
                                                                key={member.id}
                                                                className="member-wrapper">
                                                                {member.name}
                                                            </div>
                                                        )
                                                    }
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
