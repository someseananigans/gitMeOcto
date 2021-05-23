import styled from 'styled-components'



export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 280px;
  position: relative; 
`

export const Wrapper = styled.div`
margin: 20px;
position: absolute;
top: ${({ loading }) => loading ? '-250%' : '0'};
opacity: ${({ loading }) => loading ? '0' : '1'};
transition: .6s all ease-in-out;
`

export const Heading = styled.h1`
font-family: 'Teko', sans-serif;
  font-size: 100px;
    line-height: 80px;
    letter-spacing: -3px;
    font-weight: 800;
    text-align: center;
    background-image: linear-gradient(to top, #7bcfff, white 50%);
    /* background-image: linear-gradient(45deg, #f3ec78, #af4261);  */
    background-size: 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    
`