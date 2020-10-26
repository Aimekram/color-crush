import getAdjacentBlocks from "./getAdjacentBlocks";
import containsObject from "./containsObject";

const checkAdjacentBlocks = (event, data) => {
    const clicked = {
        col: parseInt(event.target.dataset.col), 
        row: parseInt(event.target.dataset.row),
        get color() {
            return data[this.col][this.row] 
        },
    };
    
    // find adjacent blocks with same color as clicked
    const findSameColorAdjacent = (col, row) => getAdjacentBlocks(data, col, row).filter(block => block.color === clicked.color)

    // make array of blocks with color same as clicked
    let same = findSameColorAdjacent(clicked.col, clicked.row)
    
    // create array to store unique blocks with same color as clicked
    const toDelete = [{...clicked}]
    
    // get same color adjacent blocks for next blocks
    while(same.length) {
        findSameColorAdjacent(same[0].col, same[0].row).map(item => { 
            if(!containsObject(toDelete, item)) { 
                same.push(item) 
            } 
        })
        if(!containsObject(toDelete, same[0])) {
            toDelete.push(same[0])
        }
        same.shift()
    }
    
    return toDelete
}

export default checkAdjacentBlocks;