import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Container , ButtonContainer } from "./styles";



export function Day03(){

  return(
    <Container>
      <Header />
      <Section title ="Button Animation">
        <ButtonContainer>
          <div className="button"></div>
        </ButtonContainer>
      </Section>

      <Footer/>
    </Container>
  )
  
}