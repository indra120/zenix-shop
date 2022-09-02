import styled from 'styled-components'

const style = {
  Container: styled.div`
    height: 60px;
  `,
  Wrapper: styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  Left: styled.div`
    flex: 1;
    display: flex;
    align-items: center;
  `,
  Language: styled.span`
    font-size: 14px;
    cursor: pointer;
  `,
  SearchContainer: styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
  `,
  Input: styled.input`
    border: none;
  `,
  Center: styled.div`
    flex: 1;
    text-align: center;
  `,
  Logo: styled.h1`
    font-weight: bold;
  `,
  Right: styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `,
  MenuItem: styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
  `,
}

export default style