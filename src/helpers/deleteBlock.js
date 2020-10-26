import { newColor } from "./generateItems";

export const deleteBlock = (state, col, row) => {
    return state.map((prevCol, prevColIndex) => {
        if(prevColIndex === col) { 
            return state[col].map((color, index) => index === row ? "white" : color)
        }
        return prevCol
    })
}

export const moveColors = (column) => {
    const movedColors = []
    const filteredColumn = column.filter(item => {
        if(item === "white") {
            movedColors.push(newColor())
            return false
        }
        return true
    }) 
    movedColors.push(...filteredColumn)
    
    return movedColors
}