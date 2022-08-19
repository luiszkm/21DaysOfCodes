import { Container } from "./styles";


type SectionProps = {
  children: any;
  title: string;
}

export function Section(props: SectionProps) {

  return (
    <Container>
      <h3>{props.title}</h3>
      {props.children}
    </Container>
  )
}