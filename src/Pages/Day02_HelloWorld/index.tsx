import { Footer } from "../../components/Footer/index.js"
import { Header } from "../../components/Header/index.js"
import { Section} from "../../components/Section"
import { Container } from "./styles.js"

export function Day02() {

  return (
    <Container>
      <Header />
        <Section title="Day02 Hello World">
          <h1>Hello World!</h1>
        </Section>
      <Footer />
    </Container>
  )
}