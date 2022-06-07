import React, { useState, useContext } from 'react'
import './AddMemberForm.css'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase.config'
import { FirestoreDataContext } from '../../utils/context/firestoreDataContext'
import checkIcon from '../../assets/icons/check.svg'

export default function AddMemberForm() {
    const [name, setName] = useState('')
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const { fetchBoatCrewMembers } = useContext(FirestoreDataContext)

    const sendNameToDb = async () => {
        try {
            await setDoc(doc(db, 'boat-crew', Date.now().toString()), {
                name: name
            })
            setIsFormSubmitted(true)
            setName('')
            setTimeout(() => setIsFormSubmitted(false), 1500)
        } catch (err) {
            window.alert(
                'Wopsy, there was an error adding the member to the database. Pease try again.'
            )
        }
    }

    return (
        <>
            <form className="new-member-form">
                <div className="name-input-wrapper">
                    <input
                        className="name-input"
                        id="name"
                        name="name"
                        type="text"
                        value={name}
                        placeholder="Nom de l'Argonaute"
                        autoComplete="off"
                        onChange={(event) => {
                            event.preventDefault()

                            setName(event.target.value)
                        }}
                    />
                </div>
                {isFormSubmitted === false ? (
                    <button
                        className="button-default button-blue"
                        type="submit"
                        onClick={(event) => {
                            event.preventDefault()
                            sendNameToDb().then(() => {
                                fetchBoatCrewMembers()
                            })
                        }}>
                        <b>Ajouter</b>
                    </button>
                ) : (
                    <button
                        className="button-default button-green"
                        type="submit"
                        onClick={(event) => {
                            event.preventDefault()
                            sendNameToDb().then(() => {
                                fetchBoatCrewMembers()
                            })
                        }}>
                        <img src={checkIcon} alt="tick icon"></img>
                    </button>
                )}
            </form>
        </>
    )
}
