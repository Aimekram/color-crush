import React from "react";
import { GlobalStyles } from "../../styledComponents/GlobalStyle";

import Board from "../Board";
import Score from "../Score";


const App = () => {
  return (
    <>
      <GlobalStyles />
      <Score />
      <Board />
    </>
  );
}

export default App;
