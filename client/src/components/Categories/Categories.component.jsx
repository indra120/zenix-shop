import { Category } from '..'
import { Container } from './Categories.style'
import { categories } from '../../data'

export default function Categories() {
  return (
    <Container>
      {categories.map(category => <Category item={category} key={category.id} />)}
    </Container>
  )
}