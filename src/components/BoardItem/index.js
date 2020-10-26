import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeBlocks } from "../../actions";

import checkAdjacentBlocks from "../../helpers/checkAdjacentBlocks";

import { StyledItem } from "../../styledComponents/StyledBoard";

const BoardItem = ({ color, col, row }) => {
    const dispatch = useDispatch();
    const data = useSelector(state => state)

    const handleClick = event => {
        const toDelete = checkAdjacentBlocks(event, data)
        toDelete.length > 1 && dispatch(changeBlocks(toDelete))
    }

    return <StyledItem color={color} data-col={col} data-row={row} onClick={handleClick}/>
}

export default BoardItem;