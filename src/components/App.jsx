import React from 'react'
import styled from 'styled-components'
import { Reset } from 'styled-reset'
// import Nav from './Mobile/Nav'
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

// const Container = styled.div`
//   background: linear-gradient(#285a8b, #797d81);
//   width: 100vw;
//   height: 100vh;
// `

export default () => {
  return (
    <div>
      <Reset />
      <Container>
        <Desktop>
          <DashboardDesktop />
          {/* <ProfileNav /> */}
        </Desktop>
        <Mobile>
          <DashboardNav />
        </Mobile>
      </Container>
    </div>
  )
}
