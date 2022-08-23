import { Factory } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Container, ButtonContainer } from "./styles";



export function Day03() {




  function handleClick() {
    let positionX:any = 1


    let buttonAnimation:any = setInterval(() => {


      let button = document.querySelector(".button") as HTMLElement
      button.style.left = positionX + "px";

      positionX++
      console.log(positionX);
      
      buttonAnimation()
    }, 600)
  }



  return (
    <Container>
      <Header />
      <Section title="Button Animation">
        <ButtonContainer>
          <div
            onClick={handleClick}
            className="button">

          </div>
        </ButtonContainer>
      </Section>

      <Footer />
    </Container>
  )

}