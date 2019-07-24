import React from 'react'
import styled from 'styled-components'
import { colors, borderRadius } from '../../../constants/styles'
import myprofile from '../../../assets/myprofile.svg'

const MyProfile = styled.div`
  position: relative;
  top: -460px;
  left: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`

const Card = styled.img`
  width: 330px;
`

export default () => {
  return (
    <>
      <MyProfile>
        <Card src={myprofile} alt="My Profile" />
      </MyProfile>
    </>
  )
}
