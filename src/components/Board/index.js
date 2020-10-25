import React from "react";

import BoardItem from "../BoardItem";
import getRandom from "../../helpers/getRandom";
import { COLORS } from "../../constants";
import { StyledBoard } from "../../styledComponents/StyledBoard";

const Board = () => {
    const items = []

    const renderItems = () => {
        for(let i=0; i < 24; i++) { 
            items.push(<BoardItem key={`boardItem-${i}`} color={getRandom(COLORS)}/>) 
        }
    }
    renderItems()

    return (
        <StyledBoard className="board">{items}</StyledBoard>
    )
}

export default Board;