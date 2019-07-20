import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'
import ellipse from '../assets/ellipse.svg'
import person from '../assets/person.svg'

const Logo = styled.div`
  position: absolute;
  left: 50px;
  top: 25px;
  img {
    width: 50px;
  }
`

export default () => {
  return (
    <>
      <Logo>
        <img src={logo} alt='logo' />
      </Logo>
    </>
  )
}
