import React from "react";
import { useSelector } from "react-redux";

import BoardItem from "../BoardItem";
import { StyledBoard, ErrorInfo } from "../../styledComponents/styled";

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
                <ErrorInfo>Oups, there's problem with store connection</ErrorInfo>
            }
        </StyledBoard>
    )
}

export default Board;