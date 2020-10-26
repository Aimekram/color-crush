import { newColor } from "./generateItems";

export const deleteBlock = (board, col, row) => {
    return board.map((prevCol, prevColIndex) => {
        if(prevColIndex === col) { 
            return board[col].map((color, index) => index === row ? "white" : color)
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