
import styled from 'styled-components'


export const Nav = styled.nav`
  position: absolute;
  background: transparent;
  height: 60px;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  z-index: 999;
`

export const NavContainer = styled.div`
  display: flex; 
  align-items: center;
  margin: 0 50px;
`

export const Home = styled.button`
  font-weight: 700;
    font-size: 15px;
  text-decoration: none;
  background: #161c26;
  border: 1px solid #30363d;
  color: white;
  width: 80px;
  height: 40px;
  border-radius: 5px;
  transition: .2s ease-in-out;
  opacity: ${({ search }) => search ? 1 : 0};

  &:hover {
    cursor: pointer;
    color: #1d1d1d;
    background: #dbffff
  }
`

export const Home2 = styled.button`
  font-weight: 700;
    font-size: 15px;
  text-decoration: none;
  background: #161c26;
  border: 1px solid #30363d;
  color: white;
  width: 80px;
  height: 40px;
  border-radius: 5px;
  transition: .2s ease-in-out;

  &:hover {
    cursor: pointer;
    color: #1d1d1d;
    background: #dbffff
  }
`