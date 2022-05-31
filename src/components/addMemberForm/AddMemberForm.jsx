import React, { useState, useContext } from 'react'
import './AddMemberForm.css'
// import { useNavigate } from 'react-router-dom'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase.config'
import { FirestoreDataContext } from '../../utils/context/firestoreDataContext'

export default function AddMemberForm() {
    const [name, setName] = useState('')
    const [validation, setValidation] = useState('')
    const [validationColor, setValidationColor] = useState('')
    const { fetchBotCrewMembers } = useContext(FirestoreDataContext)
    // const navigate = useNavigate()

    const sendNameToDb = async () => {
        try {
            await setDoc(doc(db, 'bot-crew', Date.now().toString()), {
                name: name
            })
            setValidationColor('color : green')
            setValidation('Member successfully added')
            console.log('Member successfully added')
            setName('')
        } catch (err) {
            console.log(err)
            setValidationColor('color : red')
            setValidation('Wopsy, there was an error adding the member to the database')
        }
    }

    return (
        <>
            <div className="new-member-form-container">
                <h1>Ajouter un(e) Argonaute</h1>
                <form className="new-member-form">
                    {/* <label htmlFor="name">Nom de l&apos;Argonaute</label> */}
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Nom de l'Argonaute"
                        onChange={(event) => {
                            event.preventDefault()
                            console.log(event.target.value)
                            setName(event.target.value)
                        }}
                    />
                    <button
                        type="submit"
                        onClick={(event) => {
                            event.preventDefault()
                            sendNameToDb().then(() => {
                                fetchBotCrewMembers()
                            })
                        }}>
                        Envoyer
                    </button>
                    <div className="validation" style={{ validationColor }}>
                        {validation}
                    </div>
                </form>
            </div>
        </>
    )
}