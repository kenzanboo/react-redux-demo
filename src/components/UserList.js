import { map, take, size } from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import UserRow from "./UserRow"
import STATUS from '../constants/status'
import S from '../shared-styles'
import styled from 'react-emotion'


const dateLabel = {
  [STATUS.PENDING]: 'ESTIMATED DELIVERY',
  [STATUS.CONSIDERING]: 'UPDATED',
  [STATUS.SUSPENDED]: 'UPDATED',
}
const showReportText = {
  [STATUS.PENDING]: 'Show Pending reports',
  [STATUS.CONSIDERING]: 'Show Consider reports',
  [STATUS.SUSPENDED]: 'Show On Hold reports',
}
const MAX_DISPLAY_ROWS = 5

const Wrapper = styled('div')`
  display: inline-block;
  width: 33.33%;
  box-sizing: border-box;
  padding: ${S.size.small}px;
  vertical-align: top;
  @media (max-width: 768px) {
    width: 100%
  }
`
const Container = styled('div')`
  background: white;
  border: 1px solid ${S.colors.borderGrey};
  border-radius: ${S.size.tiny}px;
  box-shadow: 0px 2px 5px 0px #d6d6d6;
  text-align: center;
`
const Top = styled('div')`
  margin: ${S.size.medium}px auto;`
const Count = styled('div')`
  font-size: ${S.font.xlarge};
`
const Bottom = styled('div')`
  color: ${S.colors.linkColor};
`
const Header = styled('div')``
const Label = styled('div')`
  display: inline-block;
  width: 50%;
  box-sizing: border-box;
`
const UserList = ({ userList, type }) => (
  <Wrapper>
    <Container>
      <Top>
        <Count>{size(userList)}</Count>
      </Top>
      <Header>
        <Label>Name</Label>
        <Label>{dateLabel[type]}</Label>
      </Header>
      {map(take(userList, MAX_DISPLAY_ROWS), (user) => {
        return (<UserRow key={user.id} user={user} type={type}/>)
      })}
      <Bottom>
        {showReportText[type]}
      </Bottom>
    </Container>
  </Wrapper>
)

UserList.propTypes = {
  userList: PropTypes.array,
  type: PropTypes.string.isRequired
}

export default UserList
