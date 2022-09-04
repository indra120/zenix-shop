import SendIcon from '@material-ui/icons/Send'
import {
  Button,
  Container,
  Desc,
  Input,
  InputContainer,
  Title,
} from './Newsletter.style'

export default function Newsletter() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>

      <InputContainer>
        <Input placeholder='Your email' />

        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  )
}