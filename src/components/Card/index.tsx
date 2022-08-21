import { Container } from "./styles";


type CardProps = {
  urlImg?: string,
  day?: string,
  title?: string,
  description?: string,

}

export function Card(props: CardProps) {

  return (
    <Container>
      <h3>Day {props.day}</h3>

      <div className="infoContainer">
        <strong>{props.title}</strong>
        <p>{props.description}</p>
      </div>
    </Container>
  )
}