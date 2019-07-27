import React, { Component } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Reset } from 'styled-reset'
// import Nav from './Mobile/Nav'
import consumerDB from '../api/consumerDB'
import DashboardDesktop from './Desktop/DashboardDesktop'
import DashboardNav from './Mobile/DashboardNav'
import { device } from '../constants/styles'

const GlobalStyles = createGlobalStyle`
 html {
   box-sizing: border-box;
}

 *,
 *::before,
 *::after {
   box-sizing: inherit;
}
`

const Container = styled.div`
  background: linear-gradient(#0c1a39, #84a5ef);
  width: 100vw;
  height: 800px;
  @media ${device.tabletDesktop} {
    background: linear-gradient(#285a8b, #797d81);
  }
`

const Desktop = styled.div`
  @media ${device.mobile} {
    display: none;
  }
`
const Mobile = styled.div`
  display: block;
  @media ${device.tabletDesktop} {
    display: none;
  }
`

export default class App extends Component {
  state = {
    profileInfo: [],
  }

  async componentDidMount() {
    try {
      const { data } = await consumerDB.get('/consumers')
      this.setState({ profileInfo: data })
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const { profileInfo } = this.state
    return (
      <div>
        <Container>
          <Reset />
          <GlobalStyles />
          <Desktop>
            <DashboardDesktop profileInfo={profileInfo[0]} />
          </Desktop>
          <Mobile>
            {/* <Nav /> */}
            <DashboardNav profileInfo={profileInfo[0]} />
          </Mobile>
        </Container>
      </div>
    )
  }
}
