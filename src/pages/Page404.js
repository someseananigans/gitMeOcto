import React from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'
import { Navbar } from '../components'
import { useHistory, Link } from 'react-router-dom'
import lost1 from '../assets/lost1.svg'
import lost2 from '../assets/lost2.svg'

const Page404 = () => {
  const history = useHistory()
  const goHome2 = () => {
    history.push('./')
  }

  return (
    <>
      <Navbar goHome2={goHome2} location={'404'} />
      <Container>
        <Wrapper>
          <Heading>Huh?</Heading>
          <Heading>How'd you</Heading>
          <Heading>even get here!</Heading>
          <Image
            src={lost1} alt="lost_img" />
          <GoHome to='/' >Git Me Outta Here! →</GoHome>
        </Wrapper>
      </Container>
    </>
  )
}

export default Page404

const FadeInAnimation = keyframes`
  0% {
    opacity: 0;
    }
  100% {
    opacity: 1;
  }
`


const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  animation: ${FadeInAnimation} ease-in-out 1s;

`


const Wrapper = styled.div`
margin: 60px 0 ;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 550px;

  @media screen and (max-width: 580px) {
    width: 90%;
    height: auto;
  }
`

const Heading = styled.h1`
  font-family: 'Archivo Black', sans-serif;
  line-height: 45px;
  font-weight: 800;
  font-size: 5rem;
  letter-spacing: -.08em;
  line-height: 60px;
  color: #ffffff;

  @media screen and (max-width: 470px) {
    font-size: 4rem;
    line-height: 47px;
  }
`

const Image = styled.img`
  margin: 20px 0;
  height: auto;
  width: 100%;
  align-self: center;
`

const GoHome = styled(Link)`
  text-align: center;
  color: #ffffff;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #6be1ff;
  }
  `