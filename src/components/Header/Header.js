import React from 'react'
import styled from 'styled-components'
import { Container, Wrapper, Heading } from './Header.elements'


const Header = ({ loading }) => {
  return (
    <>
      <Container>
        <Wrapper loading={loading}>

          <Heading>GENERATE</Heading>
          <Heading>GITHUB</Heading>
          <Heading>USER</Heading>
        </Wrapper>
      </Container>
    </>
  )
}

export default Header

