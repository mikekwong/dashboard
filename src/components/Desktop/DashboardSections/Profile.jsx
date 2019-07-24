import React from 'react'
import styled from 'styled-components'
import { colors, fonts } from '../../../constants/styles'
import myprofile from '../../../assets/myprofile.svg'

const MyProfile = styled.div`
  margin-left: 500px;
  margin-top: -465px;
`

const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 300px;
  position: absolute;
  top: 50px;
  left: 523px;
`

const Title = styled.p`
  margin-bottom: 8px;
  font-size: 18px;
  color: ${colors.white};
`

const LastLogin = styled(Title)`
  margin-bottom: 3px;
  font-size: 10px;
`
const RecentTransaction = styled(Title)`
  font-size: 10px;
`

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 300px;
  position: absolute;
  top: 250px;
  left: 523px;
  & :nth-child(1),
  & :nth-child(2) {
    margin-bottom: 30px;
  }
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
  margin-top: 15px;
  border-bottom: 2px solid #2dc933;
`

const Card = styled.img`
  width: 330px;
`

export default () => {
  return (
    <>
      <MyProfile>
        <StatusContainer>
          <Title>My profile</Title>
          <LastLogin>Last Login : Nov. 1, 2018 01:00 am</LastLogin>
          <RecentTransaction>
            Recent Transaction : Nov. 1, 2018 01:00 am
          </RecentTransaction>
        </StatusContainer>
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
