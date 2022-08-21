import styled from "styled-components";

export const Container = styled.div`


`


export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 20rem;
  height: 4rem;
  padding: 1px;
  border: 1px solid black;
  border-radius: 4rem;

  >.button{
    width: 4rem;
    height: 100%;
    border-radius: 50%;
    background-color: red;
    cursor: pointer;
  }
`