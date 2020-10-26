// get colors of all 4 adjacent blocks - top, right, bottom, left
const getAdjacentBlocks = (data, col, row) => [
    {col, row: row-1, color: row === 0 ? undefined : data[col][row-1]},
    {col: col+1, row, color: !data[col+1] ? undefined : data[col+1][row]},
    {col, row: row+1, color: data[col][row+1]}, 
    {col: col-1, row, color: col === 0 ? undefined : data[col-1][row]}
]

export default getAdjacentBlocks;