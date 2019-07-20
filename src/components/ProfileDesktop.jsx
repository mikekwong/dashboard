import React from 'react'
import styled from 'styled-components'
import { device } from '../constants/styles'
import logo from '../assets/logo.svg'
import logo_grayscale from '../assets/logo_grayscale.svg'
import ellipse from '../assets/ellipse.svg'
import person from '../assets/person.svg'
import aisles from '../assets/aisles.svg'
import item from '../assets/item.svg'
import cart from '../assets/cart.svg'
import receipt from '../assets/receipt.svg'
import contact from '../assets/contact.svg'

const Container = styled.div`
  display: flex;
`

const Logo = styled.div`
  display: flex;
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
      <Container>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
      </Container>
    </>
  )
}
