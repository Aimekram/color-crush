import { dataToStore } from "../helpers/generateItems";
import {deleteBlock, moveColors} from "../helpers/deleteBlock";

const initialState = dataToStore();

const boardItemsReducer = (state = {board: initialState, score: 0}, action) => {
    switch(action.type) {
        case "CLICK_HANDLED":
            const points = action.payload.toDelete.length
            action.payload.toDelete.map(item => state.board = deleteBlock(state.board, item.col, item.row))
            const newBoard = state.board.map(column => moveColors(column))
            return {...state,
                    board: newBoard,
                    score: state.score + points
                }
            
        default:
            return state;
    }
}
        
export default boardItemsReducer;