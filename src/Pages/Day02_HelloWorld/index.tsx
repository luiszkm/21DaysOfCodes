import { Footer } from "../../components/Footer/index.js"
import { Header } from "../../components/Header/index.js"
import { Section } from "../../components/Section"
import { Container } from "./styles.js"
import { useEffect } from "react"
export function Day02() {

  let i = 0;
  let txt = `World!`;
  let speed = 120;

  useEffect(() => {
    setInterval(
      function typeWriter() {
        if (i < txt.length) {
          let text = document.querySelector("#text-animation") as HTMLElement 
          text.innerHTML += txt.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
        }
      }
      , 1500)
  })
  return (
    <Container>
      <Header />
      <Section title="Day02 Hello World">
        <h1>Hello <strong id="text-animation"></strong></h1>
      </Section>
      <Footer />
    </Container>
  )
}