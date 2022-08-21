import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Container, Nav } from "./styles";

import { Link } from "react-router-dom";

export function Projects() {

  return (
    <Container>
      <Header />
      <Section title="Projetos">
        <Nav>
          <Link to="/day02_hello_world">
            <Card />
          </Link>
          <Link to="/day03_button_animation">
            <Card />
          </Link>
        </Nav>
      </Section>
      <Footer />
    </Container>
  )
}