import styled from "styled-components"
import bgImg from "../../assets/day02_hello_world.webp"
export const Container = styled.div`
  >section{
    background-image: url(${bgImg});
    background-size: cover;
    >h3{
      color: #FF177E;
      font-size: 2.4rem;
      margin-bottom: 8rem;
    }
    >h1{
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 5rem;
    animation: topToDown 1s backwards;
    background: linear-gradient(to right, #30CFD0 0%, #330867 100%);
    -webkit-background-clip: text;
	  -webkit-text-fill-color: transparent;

    @media (min-width: 768px) {
      font-size: 15rem;

    }
  
    }
  }
  
`