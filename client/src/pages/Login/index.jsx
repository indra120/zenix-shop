import {
  Button,
  Container,
  Form,
  Input,
  Link,
  Title,
  Wrapper,
} from './Login.style'

export default function Login() {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>

        <Form>
          <Input placeholder='username' />
          <Input placeholder='password' />
          <Button>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}