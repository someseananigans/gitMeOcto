import { useEffect, useState } from 'react'
import { Navbar, Searchbar, Header } from '../components'
import styled from 'styled-components'

const Home = () => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <>
      <Navbar />
      <Container>
        <Main>
          <Header loading={loading} />
          <Searchbar loading={loading} />
        </Main>
      </Container>
    </>
  )
}

export default Home

const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  overflow: hidden;
`

const Main = styled.div`
  margin-top: 60px;
  height: 630px;
`