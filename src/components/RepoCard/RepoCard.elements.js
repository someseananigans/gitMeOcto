import styled from 'styled-components'
import { keyframes } from 'styled-components'

export const Load = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const URL = styled.a`
  text-decoration: none ;
  color: white;
  margin: 15px;
  min-width: 400px;
  width: 400px;
  @media screen and (max-width: 1406px) {
    width: 42%;
  }
  @media screen and (max-width: 976px) {
    flex-grow: .5 !important;
  }
  @media screen and (max-width: 672px) {
    width: 100%;
  }
  &:hover {
    box-shadow: 0px 0px 0px 3px white;
  }
`

export const URL2 = styled.a`
  text-decoration: none ;
  color: white;
  margin: 15px;
  min-width: 400px;
  width: 400px;
  transition: .2s ease-in-out;
  opacity: ${({ fade }) => fade ? 1 : 0};
  @media screen and (max-width: 1406px) {
    width: 42%;
  }
  @media screen and (max-width: 976px) {
    flex-grow: .5 !important;
  }
  @media screen and (max-width: 672px) {
    width: 100%;
  }
  &:hover {
    box-shadow: 0px 0px 0px 3px white;
  }
`

export const Container = styled.div`
  border-radius: 10px;
  /* border: 1px solid #7c7c7c; */
  background: #1d2325;
  /* min-height: 150px;
  height: auto; */
  height: 160px;
  /* min-width: 350px; */
  padding: 10px;
  
  /* flex: 1; */
  /* min-width: 400px; */
  width: 100%;

`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`

export const ProjectName = styled.h2`
  padding: 10px 0px 7px 0px;
  width: 100%;
  text-decoration: none !important;
  /* text-align: center; */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Description = styled.p`
  color: #dddddd;
  padding-bottom: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const FileSize = styled.p`
margin-left: 5px;
`

export const Updated = styled.p`
margin-left: 5px;
`

export const DetailsWrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  color: #b9b9b9;
  flex-wrap: wrap;
  padding: 10px 20px;
`

// export const LanguageWrapper = styled.div`
//   display: flex;
//   margin-bottom: 3px;
//   flex-wrap: wrap;
// `

// export const Lang = styled.div`
//   margin-right: 5px;
// `

export const MainWrapper = styled.div`
  padding: 0 20px;
  height: 378px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

export const MiniWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
  width: 50%;
`