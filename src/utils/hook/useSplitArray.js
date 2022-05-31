import { useEffect } from 'react'

const useSplitArray = (array) => {
    // const [splittedMembers, setSplittedMembers] = useState({})

    useEffect(() => {
        const boatCrewLength = array.botCrewLength
        const membersSubdivisionLength = Math.round(boatCrewLength / 3)
        // const firstMembersSubdivision = array.splice(0, membersSubdivisionLength)
        // const secondMembersSubdivision = array.splice(0, membersSubdivisionLength)
        // const thirdMembersSubdivision = array.splice(0, membersSubdivisionLength)
        var a = array
        while (a.length) {
            return console.log(a.splice(0, membersSubdivisionLength))
        }
    }, [array])

    // return [splittedMembers]
}

export default useSplitArray
