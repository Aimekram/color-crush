import { dataToStore } from "../helpers/generateItems";
import deleteBlock from "../helpers/deleteBlock";

const initialState = dataToStore();

const boardItemsReducer = (state = initialState, action) => {
    switch(action.type) {
        case "CLICK_HANDLED":
            action.payload.toDelete.map(item => state = deleteBlock(state, item.col, item.row))
            return state;
            
        default:
            return state;
    }
}
        
export default boardItemsReducer;