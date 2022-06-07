import { createContext } from 'react'
import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase.config'
import splitArray from '../helper/splitArray'

export const FirestoreDataContext = createContext()

export function FirestoreDataProvider(props) {
    const [members, setMembers] = useState([])
    const boatCrewRef = collection(db, 'boat-crew')
    const [loadingData, setLoadingData] = useState(true)
    const [splittedMembers, setSplittedMembers] = useState({})
    const [updateNumber, setUpdateNumber] = useState(0)

    const fetchBoatCrewMembers = async () => {
        try {
            const data = await getDocs(boatCrewRef)
            setMembers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            setUpdateNumber(updateNumber + 1)

            setLoadingData(false)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchBoatCrewMembers()
    }, [])

    useEffect(() => {
        setSplittedMembers(splitArray(members))
    }, [members])

    useEffect(() => {}, [splittedMembers])

    return (
        <FirestoreDataContext.Provider
            value={{ members, splittedMembers, fetchBoatCrewMembers, updateNumber, loadingData }}>
            {!loadingData && props.children}
        </FirestoreDataContext.Provider>
    )
}
