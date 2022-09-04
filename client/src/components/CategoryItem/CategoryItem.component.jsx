import { Button, Container, Image, Info, Title } from './CategoryItem.style'

export default function CategoryItem({ item }) {
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