export default function splitArray(array) {
    console.log(array.length)

    let splittedMembers = {}

    const membersSubdivisionLength = Math.ceil(array.length / 3)
    var boatCrew = [...array]

    if (array.length === 4) {
        splittedMembers = {
            column1: boatCrew.splice(0, 2),
            column2: boatCrew.splice(0, 1),
            column3: boatCrew
        }
    } else {
        splittedMembers = {
            column1: boatCrew.splice(0, membersSubdivisionLength),
            column2: boatCrew.splice(0, membersSubdivisionLength),
            column3: boatCrew
        }
    }

    return splittedMembers
}
