import React from 'react'
import { Home, Nav, NavContainer, Home2 } from './Navbar.elements'

const Navbar = ({ search, goHome, goHome2, location }) => {
  return (
    <>
      <Nav>
        <NavContainer>
          {location == 'home' && <Home search={search} onClick={goHome}>home</Home>}
          {location == '404' && <Home2 onClick={goHome2}>home</Home2>}
        </NavContainer>
      </Nav>
    </>
  )
}

export default Navbar
