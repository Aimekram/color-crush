import React from "react";
import { useSelector } from "react-redux";

import { StyledScore } from "../../styledComponents/styled";

const Score = () => {
    const score = useSelector(state => state.score)

    return <StyledScore>Your score: {score}</StyledScore>
}

export default Score;