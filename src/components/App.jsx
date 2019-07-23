import React from 'react'
import styled from 'styled-components'
import { Reset } from 'styled-reset'
import ProfileNav from './Mobile/ProfileNav'
import ProfileDesktop from './Desktop/ProfileDesktop'
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
  @media ${device.tabletDesktop} {
    display: none;
  }
`
const Mobile = styled.div`
  display: none;
  @media ${device.tabletDesktop} {
    display: block;
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
          <ProfileNav />
        </Desktop>
        <Mobile>
          <ProfileDesktop />
        </Mobile>
      </Container>
    </div>
  )
}
