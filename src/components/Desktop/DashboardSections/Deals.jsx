import React from 'react'
import styled from 'styled-components'
import { colors, borderRadius } from '../../../constants/styles'
import burger_coupon from '../../../assets/burgercoupon.svg'

const Deals = styled.div`
  position: relative;
  top: -32px;
  margin-left: 50px;
  width: 420px;
  height: 200px;
  background: ${colors.darkBlue};
  border-radius: ${borderRadius}px;
`

const Title = styled.p`
  position: relative;
  top: 20px;
  margin-top: 50px;
  margin-left: 30px;
  margin-bottom: 30px;
  color: ${colors.white};
  font-size: 16px;
`

const Line = styled.hr`
  margin: 0 auto;
  width: 365px;
`
const CouponContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

const Coupon = styled.img`
  width: 190px;
  margin-bottom: -5px;
`

export default () => {
  return (
    <>
      <Deals>
        <Title>Deals For You</Title>
        <Line />
        <CouponContainer>
          <Coupon src={burger_coupon} alt="Burger Coupon" />
          <Coupon src={burger_coupon} alt="Burger Coupon" />
          <Coupon src={burger_coupon} alt="Burger Coupon" />
          <Coupon src={burger_coupon} alt="Burger Coupon" />
        </CouponContainer>
      </Deals>
    </>
  )
}
