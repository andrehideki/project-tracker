import { Container } from "./styles";

export function Comment({ user, comment }) {
  return (
    <Container>
      <header>
        { user }
      </header>
      <main>
        { comment }
      </main>
    </Container>
  )
}