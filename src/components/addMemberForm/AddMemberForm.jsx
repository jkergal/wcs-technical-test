import React, { useState, useContext } from 'react'
import './AddMemberForm.css'
// import { useNavigate } from 'react-router-dom'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase.config'
import { FirestoreDataContext } from '../../utils/context/firestoreDataContext'

export default function AddMemberForm() {
    const [name, setName] = useState('')
    const [validation, setValidation] = useState('')
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const { fetchBoatCrewMembers } = useContext(FirestoreDataContext)
    // const navigate = useNavigate()

    const sendNameToDb = async () => {
        try {
            await setDoc(doc(db, 'boat-crew', Date.now().toString()), {
                name: name
            })
            setIsFormSubmitted(true)
            // setValidation('Member successfully added')
            console.log('Member successfully added')
            setName('')
            // setTimeout(() => setValidation(''), 3000)
            setTimeout(() => setIsFormSubmitted(false), 3000)
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
                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={name}
                        placeholder="Nom de l'Argonaute"
                        onChange={(event) => {
                            event.preventDefault()
                            console.log(event.target.value)
                            setName(event.target.value)
                        }}
                    />
                    {isFormSubmitted === false ? (
                        <button
                            type="submit"
                            onClick={(event) => {
                                event.preventDefault()
                                sendNameToDb().then(() => {
                                    fetchBoatCrewMembers()
                                })
                            }}>
                            Ajouter
                        </button>
                    ) : (
                        <button
                            className="btn-green-check"
                            style={{ backgroundColor: '#7bf46b' }}
                            type="submit"
                            onClick={(event) => {
                                event.preventDefault()
                                sendNameToDb().then(() => {
                                    fetchBoatCrewMembers()
                                })
                            }}>
                            ✅
                        </button>
                    )}

                    <div className="validation">{validation}</div>
                </form>
            </div>
        </>
    )
}
