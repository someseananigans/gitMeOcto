import React from 'react'
import { Container, Wrapper, MainWrapper, ProjectName, Description, DetailsWrapper, FileSize, Updated, LanguageWrapper, Lang, URL, URL2, MiniWrapper } from './RepoCard.elements'

import { Star, RepoForked, FileZip, Calendar } from '@styled-icons/octicons'




const RepoCard = ({ repo, type, fade }) => {

  console.log(repo)


  const truncateName = () => {
    let name = repo.name
    if (repo.name.length > 23) {
      if (!(/[\s\_\-]/g.test(name.slice(0, 23)))) {
        name = name.slice(0, 20) + '...'
      }
    } else if (repo.name.length > 40) {
      name = name.slice(0, 40) + '...'
    }
    return name
  }



  return (
    <>

      {type == '1' &&
        <URL href={repo.html_url} >
          <Container >
            <Wrapper>
              <MainWrapper>
                <ProjectName>{truncateName()}</ProjectName>
                <Description>{repo.description}</Description>
              </MainWrapper>

              <DetailsWrapper>
                <MiniWrapper>
                  <Star height='16px' width='16px' />
                  <FileSize>{repo.stargazers_count}</FileSize>
                </MiniWrapper>

                <MiniWrapper>
                  <RepoForked height='16px' width='16px' />
                  <FileSize>{repo.forks_count}</FileSize>
                </MiniWrapper>

                <MiniWrapper>
                  <FileZip height='16px' width='16px' />
                  <FileSize>{repo.size} kb</FileSize>
                </MiniWrapper>

                <MiniWrapper >
                  <Calendar height='16px' width='16px' />
                  <Updated>{new Date(repo.updated_at).toLocaleDateString("en-US")}</Updated>
                </MiniWrapper>
              </DetailsWrapper>
            </Wrapper>
          </Container>
        </URL>
      }
      {type == '2' &&
        <URL2 href={repo.html_url} fade={fade}>
          <Container >
            <Wrapper>
              <MainWrapper>
                <ProjectName>{truncateName()}</ProjectName>
                <Description>{repo.description}</Description>
              </MainWrapper>

              <DetailsWrapper>
                <MiniWrapper>
                  <Star height='16px' width='16px' />
                  <FileSize>{repo.stargazers_count}</FileSize>
                </MiniWrapper>

                <MiniWrapper>
                  <RepoForked height='16px' width='16px' />
                  <FileSize>{repo.forks_count}</FileSize>
                </MiniWrapper>

                <MiniWrapper>
                  <FileZip height='16px' width='16px' />
                  <FileSize>{repo.size} kb</FileSize>
                </MiniWrapper>

                <MiniWrapper >
                  <Calendar height='16px' width='16px' />
                  <Updated>{new Date(repo.updated_at).toLocaleDateString("en-US")}</Updated>
                </MiniWrapper>
              </DetailsWrapper>
            </Wrapper>
          </Container>
        </URL2>
      }
    </>
  )
}

export default RepoCard
