import React from 'react'
import styled from 'styled-components'
import { colors, fonts } from '../../../constants/styles'
import myprofile from '../../../assets/myprofile.svg'

const MyProfile = styled.div`
  margin-left: 500px;
  margin-top: -465px;
`

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 300px;
  position: absolute;
  top: 250px;
  left: 523px;
`

const Email = styled.p`
  ${fonts.asap}
  width: 32%;
  color: ${colors.gray};
  font-size: 9px;
  padding-bottom: 5px;
  margin: 12px 23px;
  border-bottom: 0.5px solid ${colors.white};
`

const Phone = styled(Email)``
const CityZip = styled(Email)``
const Empty = styled(Email)``
const TextAlerts = styled(Email)`
  width: 45%;
  margin-top: 30px;
  border-bottom: 2px solid #2dc933;
`

const Card = styled.img`
  width: 330px;
`

export default () => {
  return (
    <>
      <MyProfile>
        <DetailsContainer>
          <Email>john.doe@gmail.com</Email>
          <Phone>(123) 567 8901</Phone>
          <CityZip>New York, NY 10013</CityZip>
          <Empty>· · · · · ·</Empty>
          <TextAlerts>Text alerts activated</TextAlerts>
        </DetailsContainer>
        <Card src={myprofile} alt="My Profile" />
      </MyProfile>
    </>
  )
}
