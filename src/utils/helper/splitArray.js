export default function splitArray(array) {
    console.log(array.length)

    let splittedMembers = {}

    const boatCrewLength = array.length
    const membersSubdivisionLength = Math.ceil(boatCrewLength / 3)
    var a = [...array]

    const subdivision1 = a.splice(0, membersSubdivisionLength)
    const subdivision2 = a.splice(0, membersSubdivisionLength)
    const subdivision3 = a

    splittedMembers = {
        column1: subdivision1,
        column2: subdivision2,
        column3: subdivision3
    }

    return splittedMembers
}
