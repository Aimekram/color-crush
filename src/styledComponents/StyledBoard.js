import styled from "styled-components";

export const StyledBoard = styled.ul`
  width: 600px;
  height: 400px;
  outline: 2px solid black;
  margin: 150px auto;
  display: flex;
  flex-flow: column wrap;
  background-color: black;
`

export const StyledItem = styled.li`
  font-size: 0;
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