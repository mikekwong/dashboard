import React from 'react'
import styled from 'styled-components'
import Deals from './DashboardSections/Deals'
import Rewards from './DashboardSections/Rewards'
import { colors, borderRadius } from '../../constants/styles'

const DashboardMain = styled.div`
color: ${colors.white}
  border-radius: ${borderRadius}px;
  background: ${colors.opaqueBlue};
  width: 1000px;
  margin-top: 100px;
  position: absolute;
  left: 200px;
  height: 500px;
`
const Welcome = styled.p`
  margin-left: 50px;
  margin-top: 35px;
  font-size: 20px;
  color: ${colors.white};
`

export default () => {
  return (
    <>
      <DashboardMain>
        <Welcome>Welcome John!</Welcome>
        <Rewards />
        <Deals />
      </DashboardMain>
    </>
  )
}
