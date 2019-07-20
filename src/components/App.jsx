import React from 'react'
import styled from 'styled-components'
import { Reset } from 'styled-reset'
import ProfileMobile from './ProfileMobile'
import ProfileDesktop from './ProfileDesktop'
import { device } from '../constants/styles'

const Container = styled.div`
  background: linear-gradient(#0c1a39, #84a5ef);
  width: 100vw;
  height: 100vh;
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
          <ProfileMobile />
        </Desktop>
        <Mobile>
          <ProfileDesktop />
        </Mobile>
      </Container>
    </div>
  )
}
