import React from 'react'
import styled from 'styled-components'
import { fonts, colors } from '../../constants/styles'
import logo_grayscale from '../../assets/logo_grayscale.svg'
import heart from '../../assets/heart.svg'
import navs from '../../navs.json'

const Container = styled.div`
  ${fonts.roboto}
  background: ${colors.navyBlue}
  display: block;
  width: 80%;
  height: 100vh;
  box-shadow: 2px 1px 6px 0px rgba(0, 0, 0, 0.47);
`

const NameContainer = styled.div`
  color: ${colors.white};
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
  color: ${colors.white};
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
  color: ${colors.mobileNavBlue};
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

const BgBar = styled.div`
  background: #428be5;
  border-radius: 5px;
  width: 90%;
  height: 100%;
  top: 0;
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
          {navs.map((nav, idx) => {
            const { title } = nav
            return (
              <Section key={idx}>
                <Heart src={heart} alt="heart" />
                <DashboardSection>{title}</DashboardSection>
                <BgBar />
              </Section>
            )
          })}
        </NavContainer>
      </Container>
    </>
  )
}
