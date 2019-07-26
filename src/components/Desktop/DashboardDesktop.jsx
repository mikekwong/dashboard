import React from 'react'
import styled from 'styled-components'
import { fonts, colors } from '../../constants/styles'
import DashboardMain from './DashboardMain'
import logo from '../../assets/logo.svg'
import navs from '../../navs.json'

const Container = styled.div`
  display: flex;
  height: 100vh;
  ${fonts.roboto}
`

const Header = styled.div`
  position: absolute;
  color: ${colors.white};
  left: 200px;
  top: 33px;
`

const Headline = styled.p``

const DateInfo = styled.p`
  color: ${colors.gray};
  margin-top: 8px;
  font-size: 10px;
`

const Logo = styled.div`
  cursor: pointer;
  display: flex;
  position: absolute;
  left: 60px;
  top: 25px;
  img {
    width: 50px;
  }
`

const Section = styled.div`
  cursor: pointer;
  display: flex;
  margin: 35px 0 20px 0;
`

const Icon = styled.img`
  width: 28px;
  margin-left: 30px;
`

const DashboardTitle = styled.p`
  font-size: 12px;
  margin-top: 5px;
  margin-left: 18px;
  color: ${colors.white};
  width: 100%;
`
const NavContainer = styled.nav`
  width: 25%;
  margin-top: 80px;
  & :nth-child(1) ${DashboardTitle} {
    margin-top: 8px;
  }
  & :nth-child(2) ${Icon} {
    margin-left: 32px;
    width: 20px;
  }
  & :nth-child(2) ${DashboardTitle} {
    margin-left: 23px;
  }
  & :nth-child(4) ${DashboardTitle}, & :nth-child(5) ${DashboardTitle} {
    margin-top: 2px;
  }
  & :nth-child(6) ${Icon} {
    width: 35px;
    margin-left: 25px;
  }
  & :nth-child(6) ${DashboardTitle} {
    margin-top: 10px;
    margin-left: 16px;
  }
`

export default ({ ...profileInfo }) => {
  return (
    <>
      <Container>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <Header>
          <Headline>John's dashboard</Headline>
          <DateInfo>
            Today is Monday, 1st June 2019. It’s Cloudy and will be raining at
            Noon
          </DateInfo>
        </Header>
        <NavContainer>
          {navs.map((nav, idx) => {
            const { icon, title } = nav
            return (
              <Section key={idx}>
                <Icon src={icon} alt={title} />
                <DashboardTitle>{title}</DashboardTitle>
              </Section>
            )
          })}
        </NavContainer>
        <DashboardMain {...profileInfo} />
      </Container>
    </>
  )
}
