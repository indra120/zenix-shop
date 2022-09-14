import { useState } from 'react'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeftOutlined'
import ArrowRightIcon from '@material-ui/icons/ArrowRightOutlined'
import {
  Arrow,
  Button,
  Container,
  Desc,
  Image,
  ImageContainer,
  InfoContainer,
  Slide,
  Title,
  Wrapper,
} from './Slider.style'
import { sliderItems } from '../../data'

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(0)

  function handleClick(direction) {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  }

  return (
    <Container>
      <Arrow direction='left' onClick={() => handleClick('left')}>
        <ArrowLeftIcon />
      </Arrow>

      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map(item => (
          <Slide bg={item.bg} key={item.id}>
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>

            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>Show Now!</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>

      <Arrow direction='right' onClick={() => handleClick('right')}>
        <ArrowRightIcon />
      </Arrow>
    </Container>
  )
}