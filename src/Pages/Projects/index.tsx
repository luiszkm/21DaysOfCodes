import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Container , Nav} from "./styles";


export function Projects() {

  return (
    <Container>
      <Header />
      <Section title="Projetos">
        <Nav>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Nav>
      </Section>
      <Footer />
    </Container>
  )
}