import { CategoryItem } from '..'
import { Container } from './Categories.style'
import { categories } from '../../data'

export default function Categories() {
  return (
    <Container>
      {categories.map(item => <CategoryItem item={item} key={item.id} />)}
    </Container>
  )
}