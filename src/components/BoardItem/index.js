import React from "react";

import { StyledItem } from "../../styledComponents/StyledBoard";

const BoardItem = ({ color }) => {
    return <StyledItem color={color}></StyledItem>
}

export default BoardItem;