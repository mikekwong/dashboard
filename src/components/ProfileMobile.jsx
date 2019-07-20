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
  display: block;
`

const Logo = styled.div`
  display: block;
  position: absolute;
  left: 50%;
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
          <img src={logo_grayscale} alt="logo" />
        </Logo>
      </Container>
    </>
  )
}
