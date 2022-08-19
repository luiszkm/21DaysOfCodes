import { Container } from "./styles";


type SectionProps = {
  children: any;
  title: string;
}

export function Section(props: SectionProps) {

  return (
    <Container>
      <h2>{props.title}</h2>
      {props.children}
    </Container>
  )
}