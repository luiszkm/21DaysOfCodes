import styled from "styled-components";
import bgSvg from "../../assets/bg.svg";
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
  background-image: url(${bgSvg});
  >h2{
    color: #FFFFFF;
    text-shadow: 2px 2px gray;
  }
  @media (min-width: 768px) {
    flex-direction: row;

  }
`

export const Nav = styled.nav`

  >ul{
    display: flex;
    align-items: center;
    gap:1.3rem;
   >a li{
    color: #FFFFFF;
    text-shadow: 2px 2px gray;
   }
  }

` 