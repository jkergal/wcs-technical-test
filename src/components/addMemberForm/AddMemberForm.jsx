import React, { useState, useContext } from 'react'
import './AddMemberForm.css'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase.config'
import { FirestoreDataContext } from '../../utils/context/firestoreDataContext'
import checkIcon from '../../assets/icons/check.svg'

export default function AddMemberForm() {
    const [name, setName] = useState('')
    const [validation, setValidation] = useState('')
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const { fetchBoatCrewMembers } = useContext(FirestoreDataContext)
    // const { splittedMembers } = useContext(FirestoreDataContext)

    // let

    const sendNameToDb = async () => {
        try {
            await setDoc(doc(db, 'boat-crew', Date.now().toString()), {
                name: name
            })
            setIsFormSubmitted(true)
            console.log('Member successfully added')
            setName('')
            setTimeout(() => setIsFormSubmitted(false), 1500)
        } catch (err) {
            console.log(err)
            setValidation('Wopsy, there was an error adding the member to the database')
            setTimeout(() => setValidation(''), 3000)
        }
    }

    return (
        <>
            <div className="new-member-form-container">
                <h1>Ajouter un(e) Argonaute</h1>
                <form className="new-member-form">
                    {/* <label htmlFor="name">Nom de l&apos;Argonaute</label> */}
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
                                console.log(event.target.value)
                                setName(event.target.value)
                            }}
                        />
                    </div>
                    {isFormSubmitted === false ? (
                        <button
                            className="button-default button-grey"
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
                            <img src={checkIcon}></img>
                        </button>
                    )}

                    <div className="validation">{validation}</div>
                </form>
            </div>
        </>
    )
}
