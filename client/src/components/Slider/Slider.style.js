import styled from 'styled-components'

const style = {
  Container: styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
  `,
  Arrow: styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === 'left' && '10px'};
    right: ${props => props.direction === 'right' && '10px'};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
  `,
  Wrapper: styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
  `,
  Slide: styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};
  `,
  ImageContainer: styled.div`
    height: 100%;
    flex: 1;
  `,
  Image: styled.img`
    height: 80%;
  `,
  InfoContainer: styled.div`
    flex: 1;
    padding: 50px;
  `,
  Title: styled.h1`
    font-style: 70px;
  `,
  Desc: styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
  `,
  Button: styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
  `,
}

export default style
