import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUserListStatus } from '../actions'
import UserList from '../components/UserList'
import Nav from "../components/Nav";
import STATUS from '../constants/status'
import S from '../shared-styles'
import styled from 'react-emotion'

const Container = styled('div')`
  margin-top: ${S.size.large}px;
  border-top: 1px solid ${S.colors.borderGrey};
  background-color: ${S.colors.bgGrey};
  padding: ${S.size.small}px;
`
const Content = styled('div')`
  max-width: ${S.maxWidth}px;
  margin: auto;
`

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchUserListStatus(STATUS.PENDING))
    dispatch(fetchUserListStatus(STATUS.CONSIDERING))
    dispatch(fetchUserListStatus(STATUS.SUSPENDED))
  }

  render() {
    const { usersByStatus } = this.props
    return (
      <div>
        <Nav/>
        <Container>
          <Content>
            <UserList userList={usersByStatus[STATUS.PENDING]} type={STATUS.PENDING}/>
            <UserList userList={usersByStatus[STATUS.CONSIDERING]} type={STATUS.CONSIDERING}/>
            <UserList userList={usersByStatus[STATUS.SUSPENDED]} type={STATUS.SUSPENDED}/>
          </Content>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { usersByStatus } = state
  return {
    usersByStatus,
  }
}

export default connect(mapStateToProps)(App)
