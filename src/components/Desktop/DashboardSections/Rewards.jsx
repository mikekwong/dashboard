import React from 'react'
import styled from 'styled-components'
import { colors, borderRadius } from '../../../constants/styles'
import progress_bar from '../../../assets/progress_bar.svg'

const RewardsBox = styled.div`
  margin-left: 50px;
  margin-top: 20px;
  width: 420px;
  height: 170px;
  background: ${colors.darkBlue};
  border-radius: ${borderRadius}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`

const Container = styled.div``

const Title = styled.p`
  text-align: center;
  font-size: 20px;
  margin-bottom: 30px;
  text-align: center;
`

const Progress = styled.img`
  width: 360px;
  margin: 0 auto;
`

const Percent = styled.p`
  margin-top: 10px;
  position: relative;
  left: 69px;
`

const Status = styled.p`
  font-size: 20px;
  margin-left: 80px;
  text-align: left;
  margin-top: -10px;
`

export default () => {
  return (
    <>
      <RewardsBox>
        <Title>Rewards Bar</Title>
        <Progress src={progress_bar} alt="progress" />
        <Percent>60%</Percent>
        <Status>You're almost there!</Status>
      </RewardsBox>
    </>
  )
}
