import React from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native'

import TimerButton from './TimerButton'
import { millisecondsToHuman } from '../utils/TimerUtils'

const TimerContainer = styled.View`
  background-color: #fff;
  border: 2px solid #d6d7da;
  border-radius: 10px;
  padding: 15px;
  margin: 15px;
  margin-bottom: 0;
`

const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
`

const ElapsedTime = styled.Text`
  font-size: 26px;
  font-weight: bold;
  text-align: center;
  padding: 0 15px;
`

const ButtonGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

const Timer = ({ title, project, elapsed, onEditPress }) => {
  const elapsedString = millisecondsToHuman(elapsed)

  return (
    <TimerContainer>
      <Title>{title}</Title>
      <Text>{project}</Text>
      <ElapsedTime>{elapsedString}</ElapsedTime>
      <ButtonGroup>
        <TimerButton color="blue" small title="Edit" onPress={onEditPress} />
        <TimerButton color="blue" small title="Remove" />
      </ButtonGroup>
      <TimerButton color="#21BA45" title="Start" />
    </TimerContainer>
  )
}

export default Timer
