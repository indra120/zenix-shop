import Badge from '@material-ui/core/Badge'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined'
import {
  Center,
  Container,
  Input,
  Language,
  Left,
  Logo,
  MenuItem,
  Right,
  SearchContainer,
  Wrapper,
} from './Navbar.style'

export default function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>ID</Language>

          <SearchContainer>
            <Input />
            <SearchIcon style={{ color: 'gray', fontSize: 16 }} />
          </SearchContainer>
        </Left>

        <Center>
          <Logo>Zenix Shop</Logo>
        </Center>

        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          
          <MenuItem>
            <Badge badgeContent={4} color='primary'>
              <ShoppingCartIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}