import React from 'react'
import styled from 'styled-components'
import { Reset } from 'styled-reset'
import Profile from './Profile'

const Container = styled.div`
  background: linear-gradient(#285a8b, #797d81);
  width: 100vw;
  height: 100vh;
`

export default () => {
  return (
    <div>
      <Reset />
      <Container>
        <Profile />
      </Container>
    </div>
  )
}
