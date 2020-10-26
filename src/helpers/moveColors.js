import getRandomColor from "./getRandomColor";

const moveColors = column => {
    const movedColors = []
    const filteredColumn = column.filter(item => {
        if(item === "white") {
            movedColors.push(getRandomColor())
            return false
        }
        return true
    }) 
    movedColors.push(...filteredColumn)

    return movedColors
}

export default moveColors;