import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import MailIcon from '@material-ui/icons/MailOutline'
import PhoneIcon from '@material-ui/icons/Phone'
import PinterestIcon from '@material-ui/icons/Pinterest'
import RoomIcon from '@material-ui/icons/Room'
import TwitterIcon from '@material-ui/icons/Twitter'
import {
  Center,
  ContactItem,
  Container,
  Desc,
  Left,
  List,
  ListItem,
  Logo,
  Payment,
  Right,
  SocialContainer,
  SocialIcon,
  Title,
} from './Footer.style'

export default function Footer() {
  return (
    <Container>
      <Left>
        <Logo>Zenix Shop</Logo>

        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          enim. Minima modi iusto in necessitatibus sunt veritatis. Vel esse,
          numquam officiis obcaecati distinctio eaque aliquid, nulla asperiores
          repellat, corporis totam.
        </Desc>

        <SocialContainer>
          <SocialIcon color='3b5999'>
            <FacebookIcon />
          </SocialIcon>

          <SocialIcon color='e4405f'>
            <InstagramIcon />
          </SocialIcon>

          <SocialIcon color='55acee'>
            <TwitterIcon />
          </SocialIcon>

          <SocialIcon color='e60023'>
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title>

        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>

      <Right>
        <Title>Contact</Title>

        <ContactItem>
          <RoomIcon style={{ marginRight: '10px' }} /> 622 Dixie Path, South
          Tobinchester 98336
        </ContactItem>

        <ContactItem>
          <PhoneIcon style={{ marginRight: '10px' }} /> +69 420 13 666
        </ContactItem>

        <ContactItem>
          <MailIcon style={{ marginRight: '10px' }} /> admin@shop.ryzenix.id
        </ContactItem>

        <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
      </Right>
    </Container>
  )
}