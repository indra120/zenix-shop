import { Product } from '..'
import { popularProducts } from '../../data'
import { Container } from './Products.style'

export default function Products() {
  return (
    <Container>
      {popularProducts.map(product => <Product item={product} key={product.id} />)}
    </Container>
  )
}