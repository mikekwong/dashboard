import React from 'react'
import styled from 'styled-components'
import { fonts, colors } from '../../constants/styles'
import menu from '../../assets/menu.svg'
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
`

const BurgerCoupon = styled.img`
  margin: 0 auto;
  width: 90%;
`

const CoffeeCoupon = styled(BurgerCoupon)``

export default () => {
  return (
    <>
      <Container>
        <Menu src={menu} alt="Menu" />
        <MobileProfile />
        <BurgerCoupon src={burger_coupon} alt="Burger Coupon" />
        <CoffeeCoupon src={coffee_coupon} alt="Coffee Coupon" />
      </Container>
    </>
  )
}
