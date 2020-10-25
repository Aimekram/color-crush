const boardItemsReducer = (state = {}, action) => {
    switch(action.type) {
        case "STATE_STORED":
            return {...state, ...action.payload }
        default:
            return state;
    }
}

export default boardItemsReducer;