import FavoriteIcon from '@material-ui/icons/FavoriteBorderOutlined'
import SearchIcon from '@material-ui/icons/SearchOutlined'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined'
import { Circle, Container, Icon, Image, Info } from './Product.style'

export default function Product({ item }) {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />

      <Info>
        <Icon>
          <ShoppingCartIcon />
        </Icon>

        <Icon>
          <SearchIcon />
        </Icon>

        <Icon>
          <FavoriteIcon />
        </Icon>
      </Info>
    </Container>
  )
}