import React from 'react'
import { Card, Wrapper, Profile, Username, Name, FollowWrap, FollowItems } from './UserCard.elements'
import { People, Link } from '@styled-icons/octicons'


const UserCard = ({ user, repos, search }) => {
  return (
    <>
      <Card search={search}>
        <Wrapper>
          <Profile src={user.avatar_url} alt="user_profile" />
          <Name href={`https://github.com/${user.login}`} >{user.name}</Name>
          <Username
            href={`https://github.com/${user.login}`} >
            {user.login}
            <Link height='16px' width='16px' style={{ marginLeft: '5px' }} />
          </Username>

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
        </Wrapper>
      </Card>
    </>
  )
}

export default UserCard
