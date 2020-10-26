const deleteBlock = (state, col, row) => {
    return state.map((prevCol, prevColIndex) => {
        if(prevColIndex === col) { 
            return state[col].map((color, index) => index === row ? "white" : color)
        }
        return prevCol
    })
}

export default deleteBlock;