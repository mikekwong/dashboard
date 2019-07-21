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

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 20px;
`

const MyAccount = styled.p`
  font-size: 12px;
`

const Logo = styled.img`
  top: 25px;
  left: 45vw;
  margin: 0 auto;

  width: 50px;
`

const Name = styled.h1`
  margin-top: 5px;
  color: #fff;
`

export default () => {
  return (
    <>
      <Container>
        <NameContainer>
          <Logo src={logo_grayscale} alt="logo" />
          <Name>John Doe</Name>
          <MyAccount>My account</MyAccount>
        </NameContainer>
      </Container>
    </>
  )
}
