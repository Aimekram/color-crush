import styled from "styled-components";

export const StyledBoard = styled.ul`
  width: 600px;
  height: 400px;
  outline: 2px solid black;
  margin: 50px auto;
  display: flex;
  flex-flow: column wrap;
  background-color: black;
`

export const StyledItem = styled.li`
  width: 100px;
  height: 100px;
  border: 2px solid black;
  cursor: pointer;
  background-color: ${props => props.color};
  background-blend-mode: multiply;

  &:hover {
     opacity: .6; 
  }
`

export const StyledScore = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-top: 10vh;
`