import { Button, Container, Image, Info, Title } from './Category.style'

export default function Category({ item }) {
  return (
    <Container>
      <Image src={item.img} />

      <Info>
        <Title>{item.title}</Title>
        <Button>Shop Now!</Button>
      </Info>
    </Container>
  )
}