import { Container, Nav } from "./styles";
import { Link } from "react-router-dom";

export function Header(){

  return(
    <Container>
      <h2>21 Days of Codes</h2>
      <Nav>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/projects"><li>Projetos</li></Link>
          <Link to="/"><li>Contact</li></Link>
        </ul>
      </Nav>
    </Container>
  )
}