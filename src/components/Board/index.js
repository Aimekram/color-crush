import React from "react";
import { useDispatch } from "react-redux";

import { storeInitialState } from "../../actions";
import { generateItems, dataToStore } from "../../helpers/generateItems";


import BoardItem from "../BoardItem";

import { StyledBoard } from "../../styledComponents/StyledBoard";

const Board = () => {
    const dispatch = useDispatch();

    // generate items to render
    const items = generateItems().map(({key, color}) => <BoardItem key={key} color={color}/>)

    // populate store with initial data
    dispatch(storeInitialState(dataToStore))

    return (
        <StyledBoard className="board">{items}</StyledBoard>
    )
}

export default Board;