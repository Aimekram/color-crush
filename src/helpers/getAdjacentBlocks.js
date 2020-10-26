// get colors of all 4 adjacent blocks
const getAdjacentBlocks = (data, col, row) => [
    {col, row: row-1, color: row === 0 ? undefined : data[row-1][col]},
    {col: col+1, row, color: data[row][col+1]},
    {col, row: row+1, color: !data[row+1] ? undefined : data[row+1][col]}, 
    {col: col-1, row, color: col === 0 ? undefined : data[row][col-1]}
]

export default getAdjacentBlocks;