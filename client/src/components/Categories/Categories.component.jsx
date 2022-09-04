import { Category } from '..'
import { Container } from './Categories.style'
import { categories } from '../../data'

export default function Categories() {
  return (
    <Container>
      {categories.map(item => <Category item={item} key={item.id} />)}
    </Container>
  )
}