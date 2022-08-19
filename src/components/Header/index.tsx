import { Container, Nav } from "./styles";


export function Header(){

  return(
    <Container>
      <h2>21 Days of Codes</h2>
      <Nav>
        <ul>
          <a href="#"><li>Home</li></a>
          <a href="#"><li>Projetos</li></a>
          <a href="#"><li>Contato</li></a>
        </ul>
      </Nav>
    </Container>
  )
}