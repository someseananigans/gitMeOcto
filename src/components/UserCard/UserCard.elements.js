import styled from 'styled-components'
import { Link } from 'react-router-dom'



export const Card = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin: 60px auto 30px auto;
  opacity: ${({ search }) => search ? '1' : '0'};
  transition: .5s ease-in-out;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`

export const Profile = styled.img`
  height: 240px;
  width: 240px;
  border-radius: 50%;
  margin-bottom: 10px;
`

export const Username = styled.a`
  font-size: 2rem;
  text-decoration: none;
  color: #dadada;
  font-weight: 600;
  /* margin-bottom: 5px; */
  &:hover{
    color: #aef6ff;
  }
  margin-bottom: 2px;
`

export const Name = styled.a`
  font-size: 1.25rem;
  
  text-decoration: none;
  color: #e7e7e7;
  &:hover{
    color: #aef6ff;
  }
`

export const FollowWrap = styled.div`
  display: flex;
  margin-bottom: 2px;
`

export const FollowItems = styled.a`
  text-decoration: none;
  color: #c2c2c2;
  font-weight: 100;
  &:hover{
    color: #aef6ff;
  }
`

export const SocialWrapper = styled.div`

`

export const SocialIcons = styled.a`

`

export const Website = styled.a`
  text-decoration: none;
  color: #c2c2c2;
  font-weight: 100;
  &:hover{
    color: #aef6ff;
  }
  margin-bottom: 2px;
`

export const Bio = styled.p`
  color: #c2c2c2;
  margin-bottom: 2px;
`

