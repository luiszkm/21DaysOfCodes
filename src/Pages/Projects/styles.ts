import styled from "styled-components";

export const Container = styled.div`

  
`

export const Nav = styled.nav`
  display: grid;
    grid-template-columns: repeat(1,1fr);
    gap: 1rem;

  @media (min-width:440px) {
    grid-template-columns: repeat(2,1fr);

  }
  @media (min-width:640px) {
    grid-template-columns: repeat(3,1fr);

  }
  @media (min-width:840px) {
    grid-template-columns: repeat(4,1fr);

  }
  @media (min-width:1040px) {
    grid-template-columns: repeat(5,1fr);

  }
`