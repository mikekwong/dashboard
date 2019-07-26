import React from 'react'
import styled from 'styled-components'
import menu from '../../assets/menu.svg'
import { colors, fonts } from '../../constants/styles'
import burger_coupon from '../../assets/burgercoupon.svg'
import coffee_coupon from '../../assets/coffeecoupon.svg'
import MobileProfile from './MobileProfile'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
`

const Menu = styled.img`
  width: 20px;
  position: fixed;
  left: 20px;
  top: 30px;
  cursor: pointer;
`

// const Line = styled.hr`
//   position: fixed;
//   top: 60px;
//   width: 400px;
//   height: 1px;
// `

const TodaySavings = styled.div`
  text-align: center;
  color: ${colors.white};
  ${fonts.roboto}
  position: relative;
  top: 50px;
  font-size: 20px;
`

const BurgerCoupon = styled.img`
  margin: 0 auto;
  width: 90%;
`

const CoffeeCoupon = styled(BurgerCoupon)``

export default ({ ...profileInfo }) => {
  return (
    <>
      <Container>
        <Menu src={menu} alt="Menu" />
        <TodaySavings>
          <p>TODAY'S SAVINGS</p>
          <p>10/19/2018</p>
        </TodaySavings>
        {/* <Line /> */}
        <MobileProfile {...profileInfo} />
        <BurgerCoupon src={burger_coupon} alt="Burger Coupon" />
        <CoffeeCoupon src={coffee_coupon} alt="Coffee Coupon" />
      </Container>
    </>
  )
}
