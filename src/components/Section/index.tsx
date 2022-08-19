import { Container } from "./styles";


type ProjectsProps = {
  children: any;
  title: string;
}

export function Projects(props: ProjectsProps) {

  return (
    <Container>
      <h2>{props.title}</h2>
      {props.children}
    </Container>
  )
}