import { createContext } from 'react'
import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase.config'
// import useSplitArray from '../../utils/hook/useSplitArray'
import splitArray from '../helper/splitArray'

export const FirestoreDataContext = createContext()

export function FirestoreDataProvider(props) {
    const [members, setMembers] = useState([])
    const botCrewRef = collection(db, 'bot-crew')
    const [loadingData, setLoadingData] = useState(true)
    const [splittedMembers, setSplittedMembers] = useState({})

    const fetchBotCrewMembers = async () => {
        try {
            const data = await getDocs(botCrewRef)

            setMembers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            setLoadingData(false)
            console.log('Data loaded')
            console.log('FETCH BOT CREW : context worked')
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchBotCrewMembers()
    }, [])

    useEffect(() => {
        console.log(members)
        setSplittedMembers(splitArray(members))
    }, [members])

    useEffect(() => {
        console.log(splittedMembers)
        console.log(members)
    }, [splittedMembers])

    return (
        <FirestoreDataContext.Provider
            value={{ members, splittedMembers, fetchBotCrewMembers, loadingData }}>
            {!loadingData && props.children}
        </FirestoreDataContext.Provider>
    )
}
