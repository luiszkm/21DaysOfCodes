import styled from "styled-components";

export const Container = styled.header`
  display: flex;  
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem 4rem;
  border-bottom: 1px solid gray;
  width: 100%;
  height: 8rem;
  @media (min-width: 768px) {
    flex-direction: row;

  }
`

export const Nav = styled.nav`

  >ul{
    display: flex;
    align-items: center;
    gap:1.3rem;
  }

` 