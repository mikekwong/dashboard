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
  font-family: 'Roboto', 'Helvetica', sans-serif;
  background-color: #102345;
  display: block;
  width: 80%;
  height: 100vh;
  box-shadow: 2px 1px 6px 0px rgba(0, 0, 0, 0.47);
`

const NameContainer = styled.div`
  color: #fff;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 20px;
`

const MyAccount = styled.p`
  font-size: 15px;
  opacity: 0.5;
`

const Logo = styled.img`
  top: 25px;
  left: 45vw;
  margin: 50px auto 10px auto;
  width: 50px;
`

const Name = styled.p`
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 10px;
  color: #fff;
`

const Line = styled.hr`
  margin: 10px 0 10px 5%;
  width: 90%;
  color: gray;
  opacity: 0.5;
`

const AmountLogout = styled.div`
  display: flex;
  flex-direction: row;
  color: #428be5;
  justify-content: space-between;
  margin: 0 20px;
`

const Logout = styled.p`
  cursor: pointer;
`
const Amount = styled.p``

const NavContainer = styled.nav``

const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0;
`

const Heart = styled.img`
  width: 10%;
  margin-left: 20px;
`

const DashboardSection = styled.p`
  cursor: pointer;
  font-size: 16px;
  margin-top: 5px;
  margin-left: 20px;
  color: #428be5;
  width: 40%;
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
        <Line />
        <AmountLogout>
          <Amount>$0.00</Amount>
          <Logout>Log Out</Logout>
        </AmountLogout>
        <NavContainer>
          <Section>
            <Heart src={heart} alt="heart" />
            <DashboardSection>My Dashboard</DashboardSection>
          </Section>
          <Section>
            <Heart src={heart} alt="heart" />
            <DashboardSection>Store Locator</DashboardSection>
          </Section>
          <Section>
            <Heart src={heart} alt="heart" />
            <DashboardSection>Store Aisles</DashboardSection>
          </Section>
          <Section>
            <Heart src={heart} alt="heart" />
            <DashboardSection>Item Locator</DashboardSection>
          </Section>
          <Section>
            <Heart src={heart} alt="heart" />
            <DashboardSection>Cart</DashboardSection>
          </Section>
          <Section>
            <Heart src={heart} alt="heart" />
            <DashboardSection>Receipt</DashboardSection>
          </Section>
          <Section>
            <Heart src={heart} alt="heart" />
            <DashboardSection>Contact Us</DashboardSection>
          </Section>
        </NavContainer>
      </Container>
    </>
  )
}
