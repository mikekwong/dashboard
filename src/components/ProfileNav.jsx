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
import heart from '../assets/heart.svg'

const Container = styled.div`
  background-color: #102345;
  display: block;
  width: 80%;
  height: 100vh;
`

const NameContainer = styled.div`
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
  margin: 50px auto 10px auto;
  width: 50px;
`

const Name = styled.h1`
  margin-bottom: 5px;
  color: #fff;
`

const Line = styled.hr`
  margin: 10px 0 10px 5%;
  width: 90%;
  color: gray;
  opacity: 0.5;
`

const NavContainer = styled.nav`
  flex-direction: row;
  width: 90%;
`

const Heart = styled.img`
  justify-content: flex-start;
`

const MyDashBoard = styled.p`
  color: #428be5;
  width: 40%;
  margin: 0;
`

export default () => {
  return (
    <>
      <Container>
        <NameContainer>
          <Logo src={logo_grayscale} alt="logo" />
          <Name>John Doe</Name>
          <MyAccount>My account</MyAccount>
          <Line />
          <NavContainer>
            <Heart src={heart} alt="heart" />
            <MyDashBoard>My Dashboard</MyDashBoard>
          </NavContainer>
        </NameContainer>
      </Container>
    </>
  )
}
