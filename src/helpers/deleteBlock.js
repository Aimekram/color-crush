const deleteBlock = (state, row, col) => {
    return state.map((prevRow, prevRowIndex) => {
        if(prevRowIndex === row) { 
            return state[row].map((color, index) => index === col ? "white" : color)
        }
        return prevRow
    })
}

export default deleteBlock;