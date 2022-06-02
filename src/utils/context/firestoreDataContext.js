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
            console.log('Data loaded')
            console.log('FETCH BOT CREW : context worked')
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchBoatCrewMembers()
    }, [])

    useEffect(() => {
        console.log(members)
        console.log(updateNumber)
        setSplittedMembers(splitArray(members))
    }, [members])

    useEffect(() => {
        console.log(splittedMembers)
        console.log(members)
    }, [splittedMembers])

    return (
        <FirestoreDataContext.Provider
            value={{ members, splittedMembers, fetchBoatCrewMembers, updateNumber, loadingData }}>
            {!loadingData && props.children}
        </FirestoreDataContext.Provider>
    )
}
