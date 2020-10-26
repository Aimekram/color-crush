import generateItems from "../helpers/generateItems";
import moveColors from "../helpers/moveColors";
import deleteBlock from "../helpers/deleteBlock";

const initialState = generateItems();

const boardItemsReducer = (state = {board: initialState, score: 0}, action) => {
    switch(action.type) {
        case "CLICK_HANDLED":
            const points = action.payload.toDelete.length;

            // generate changed board after click
            action.payload.toDelete.map(item => state.board = deleteBlock(state.board, item.col, item.row));
            const newBoard = state.board.map(column => moveColors(column));

            return {...state,
                        board: newBoard,
                        score: state.score + points
                    }   
            
        default:
            return state;
    }
}
        
export default boardItemsReducer;