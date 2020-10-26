import React from "react";
import { useSelector } from "react-redux";

import BoardItem from "../BoardItem";
import { StyledBoard } from "../../styledComponents/styled";

const Board = () => {
    const data = useSelector(state => state.board)

    return (
        <StyledBoard>
            {!!data ? 
                data.map((col, colIndex) => { 
                    return col.map((color, rowIndex) => { 
                        return <BoardItem key={`boarditem-${colIndex}-${rowIndex}`} color={color} col={colIndex} row={rowIndex}/>
                    })
                })
                : 
                <p style={{color: "white"}}>"Loading..."</p>
            }
        </StyledBoard>
    )
}

export default Board;