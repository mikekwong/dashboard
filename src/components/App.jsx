import React, { Component } from 'react'
import styled from 'styled-components'
import { Reset } from 'styled-reset'
// import Nav from './Mobile/Nav'
import consumerDB from '../../api/consumerDB'
import DashboardDesktop from './Desktop/DashboardDesktop'
import DashboardNav from './Mobile/DashboardNav'
import { device } from '../constants/styles'
import './App.css'

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
    return (
      <div>
        <Reset />
        <Container>
          <Desktop>
            <DashboardDesktop profileInfo={...this.state.profileInfo}/>
            {/* <ProfileNav /> */}
          </Desktop>
          <Mobile>
            <DashboardNav profileInfo={...this.state.profileInfo}/>
          </Mobile>
        </Container>
      </div>
    )
  }
}
