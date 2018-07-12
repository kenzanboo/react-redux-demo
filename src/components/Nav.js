import React from 'react'
import styled from 'react-emotion'
import S from '../shared-styles'


const Banner = styled('div')`
  background: ${S.colors.primary};
  width: 100%;
  height: ${S.size.large}px;
`
const NavContainer = styled('div')`
  max-width: ${S.maxWidth}px;
  margin: auto;
`
const Logo = styled('img')`
  padding: ${S.padding.medium}px;
  height: ${S.size.medium}px;
`
const Dot = styled('div')`
  display: inline-block;
  color: ${S.colors.white};
  padding: 31px 17px;
  vertical-align: top;
`
const Home = styled('div')`
  display: inline-block;
  color: ${S.colors.white};
  padding: 26px 0px;
  vertical-align: top;
  font-size: ${S.font.large};
`
const Nav = () => (
  <Banner>
    <NavContainer>
      <Logo src="https://s15743.pcdn.co/wp-content/themes/checkr/assets/img/logo.svg" />
      <Dot>•</Dot>
      <Home>Home</Home>
    </NavContainer>
  </Banner>
)


export default Nav
