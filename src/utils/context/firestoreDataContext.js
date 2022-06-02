import { createContext } from 'react'
import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase.config'
// import useSplitArray from '../../utils/hook/useSplitArray'
import splitArray from '../helper/splitArray'

export const FirestoreDataContext = createContext()

export function FirestoreDataProvider(props) {
    const [members, setMembers] = useState([])
    const boatCrewRef = collection(db, 'boat-crew')
    const [loadingData, setLoadingData] = useState(true)
    const [splittedMembers, setSplittedMembers] = useState({})
    const [updateNumber, setUpdateNumber] = useState(0)
    // const [oldMembersArray, setOldMembersArray] = useState([])

    // const getNewMembersAfterUpdate = (members) => {
    //     const newMembersAfterUpdate = members.filter((member) => !oldMembersArray.includes(member))

    //     console.log('new members after update')

    //     return console.log(newMembersAfterUpdate)
    // }

    const fetchBoatCrewMembers = async () => {
        try {
            const data = await getDocs(boatCrewRef)
            // setOldMembersArray(members)
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
        // getNewMembersAfterUpdate(members)
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
