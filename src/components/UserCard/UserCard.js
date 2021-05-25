import React from 'react'
import { Card, Wrapper, Profile, Username, Name, FollowWrap, FollowItems, Bio, Website } from './UserCard.elements'
import { People, Link, LinkExternal } from '@styled-icons/octicons'


const UserCard = ({ user, repos, search }) => {
  return (
    <>
      <Card search={search}>
        <Wrapper>
          <Profile src={user.avatar_url} alt="user_profile" />
          <Username
            href={`https://github.com/${user.login}`} >
            {user.login}
            <LinkExternal height='16px' width='16px' style={{ marginLeft: '5px' }} />
          </Username>
          <Name href={`https://github.com/${user.login}`} >{user.name}</Name>

          <Bio>{user.bio}</Bio>
          <FollowWrap>
            <FollowItems
              href={`https://github.com/${user.login}?tab=followers`} >
              <People height='16px' width='16px' />
              <strong >&nbsp;{user.followers}</strong> followers
            </FollowItems>
            <p>&nbsp;·&nbsp;</p>
            <FollowItems
              href={`https://github.com/${user.login}?tab=followers`} >
              <strong >{user.following}</strong> following
            </FollowItems>
          </FollowWrap>
          <Website href={user.blog}>
            <Link height='16px' width='16px' style={{ marginRight: '5px' }} />
            {user.blog}
          </Website>
        </Wrapper>
      </Card>
      <hr style={{ margin: '0 80px 20px 80px', border: '.5px solid gray' }} />
    </>
  )
}

export default UserCard
