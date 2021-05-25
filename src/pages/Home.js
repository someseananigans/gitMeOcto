import { useEffect, useState } from 'react'
import { Navbar, Searchbar, Header, UserCard, RepoCard } from '../components'
import styled from 'styled-components'
import { keyframes } from 'styled-components'
import API from '../utils/API'
import { useHistory } from 'react-router-dom'

const Home = () => {

  // display and animation states
  const [start, setStart] = useState(true)
  const [search, setSearch] = useState(false)
  const [loading, setLoading] = useState(true)
  const [viewAll, setViewAll] = useState(false)
  const [fade, setFade] = useState(false)
  const [fadeSearch, setFadeSearch] = useState(false)
  // search states
  const [input, setInput] = useState('')
  const [barOpened, setBarOpened] = useState(false);
  // user data value states
  const [repos, setRepos] = useState({})
  const [user, setUser] = useState({})

  const history = useHistory()

  const handleInput = ({ target }) => {
    setInput(target.value)
  }

  const handleSearch = (event, username) => {
    event.preventDefault()
    setBarOpened(false);
    if (input == '') {
      history.push('./404')
    } else {

      setInput("")
      // handle animation (true => in main, false => out main and in search)
      setTimeout(() => {
        setLoading(true)
      }, 500);

      // grab user and repos
      API.getUser(username)
        .then(theUser => {
          setUser(theUser)
          console.log(theUser)
          if (theUser.message == "Not Found") {
            history.push('./404')
          }
        })
        .catch(err => console.log(err))
      API.userRepos(username)
        .then(repos => {
          const byCreation = repos.sort((a, b) => (a.created_at < b.created_at ? 1 : -1))
          setRepos(byCreation)
          console.log(byCreation)
        })
        .catch(err => console.log(err))

      // handle switching display
      setTimeout(() => {
        setStart(false)
        setSearch(true)
        setFadeSearch(true)
      }, 1000);
    }
  }

  useEffect(() => {
    setLoading(false)
  }, [])

  const hiddenItems = (area) => {
    if (area = 'extra') {
      switch (repos.length % 4) {
        case 1:
          return (<HiddenItem1 />)
          break;
        case 2:
          return (<HiddenItem2 />)
          break;
        case 3:
          return (<HiddenItem1 />)
          break;
        case 0:
          return (<HiddenItem />)
          break;
      }
    } else if (area = 'main') {
      <HiddenItem />
    }
  }

  const fadeItemsIn = () => {
    if (viewAll) {
      setFade(!fade)

      setTimeout(() => {
        setViewAll(!viewAll)
      }, 500);
    } else {
      setViewAll(!viewAll)
      setTimeout(() => {
        setFade(!fade)
      }, 1);
    }
  }

  const goHome = () => {
    setFadeSearch(!fadeSearch)
    setStart(!start)
    setUser({})
    setRepos({})
    setTimeout(() => {
      setSearch(!search)
      setLoading(!loading)
    }, 200);
  }

  return (
    <>
      <Navbar search={search} goHome={goHome} location={'home'} />
      <Container start={start}>
        <Start start={start}>
          <Header loading={loading} />
          <Searchbar
            loading={loading}
            handleSearch={handleSearch}
            handleInput={handleInput}
            input={input}
            barOpened={barOpened}
            setBarOpened={setBarOpened} />
        </Start>
        <Search search={search} fadeSearch={fadeSearch}>

          <UserCard user={user} repos={repos} search={search} />
          <RepoSpace search={search}>

            {repos.length == 0 && <h3 style={{ margin: '20px' }}>This user doesn't have any public repositories to display</h3>}
            {repos.length > 0 && repos.slice(0, 4).map(repo =>
              <RepoCard repo={repo} search={search} type={'1'} />
            )}


            {viewAll &&
              // <RepoSpace2 fade={fade}>


              repos.length > 0 && repos.slice(4).map(repo =>
                <RepoCard repo={repo} search={search} viewAll={viewAll} type={'2'} fade={fade} />
              )

              // </RepoSpace2>
            }

            {/* {!viewAll && repos.length > 4 && hiddenItems('main')}

{repos.length <= 4 && hiddenItems('extra')}
{viewAll && hiddenItems('extra')} */}
          </RepoSpace>




          {repos.length > 0 && search &&
            <ButtonWrapper>

              {user.public_repos > 4 && !viewAll ?
                <ViewMoreRepos onClick={fadeItemsIn}>View All {user.public_repos} Repos</ViewMoreRepos> :
                <ViewMoreRepos onClick={fadeItemsIn}>View Less</ViewMoreRepos>}
            </ButtonWrapper>
          }

        </Search>
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
  justify-content: ${({ start }) => start ? 'center' : 'none'};
  overflow: hidden;
`

const Start = styled.div`
  height: 100%;
  display: ${({ start }) => start ? '' : 'none'};
  z-index: 10;
`

const Search = styled.div`
  position: absolute;
  top: 0;
  padding: 20px 50px;
  height: ${({ search }) => !search && '100%'};
  width: 100%;
  align-self: center;
  z-index: ${({ search }) => search ? 99 : 1};
  height: ${({ search }) => search ? 'auto' : '10%'};
  opacity: ${({ fadeSearch }) => fadeSearch ? 1 : 0};
  transition: opacity .2s ease-in-out;
`

const RepoSpace = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  transition: .3s ease-in-out;
  opacity: ${({ search }) => search ? 1 : 0};
`
const RepoSpace2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  transition: .5s ease-in-out;
  opacity: ${({ fade }) => fade ? 1 : 0};
  /* height: ${({ viewAll }) => viewAll ? '100%' : '0'}; */
`

const ButtonWrapper = styled.div`
  /* width: 100%; */
  display: flex;
  justify-content: center;
  margin: 15px;
`

const ViewMoreRepos = styled.button`
  background: #12181a;
  color: #ffffff;
  border: 1px solid #7c7c7c;
  height: 50px;
  width: 160px;
  border-radius: 8px;
  cursor: pointer;
  transition: .2s ease-in-out;
  font-weight: 600;

  &:hover { 
    background: #ffffff;
    color: #464646;
    border: 1px solid #bbf1ff;
  }
`

const HiddenItem1 = styled.div`
  flex: 3.25;
  margin: 15px;
  padding: 10px;
  @media screen and (max-width:1586px) {
    display: none;
  }
  @media screen and (max-width:1206px) {
    display: unset;
    flex: 1;
  }
  @media screen and (max-width:826px) {
    display: none;
  }
`

const HiddenItem = styled.div`
  display: none;
  flex: 1;
  margin: 15px;
  padding: 10px;
  @media screen and (max-width:1586px) {
    display: unset;
    flex: 2.12
  }
  @media screen and (max-width:1206px) {
    display: none;
  }
  @media screen and (max-width:826px) {
    display: none;
  }
`

const HiddenItem2 = styled.div`
  flex: 2.12;
  margin: 15px;
  padding: 10px;
  @media screen and (max-width:1206px) {
    display: none;
  }
`

const HiddenItem3 = styled.div`
  flex: 1;
  margin: 15px;
  padding: 10px;
  @media screen and (max-width:826px) {
    display: none;
  }
`
