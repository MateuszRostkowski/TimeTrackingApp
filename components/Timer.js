import React from 'react'
import styled from 'styled-components/native'
import { Text, View } from 'react-native'

import TimerButton from './TimerButton'
import { millisecondsToHuman } from '../utils/TimerUtils'

const TimerContainer = styled.View`
  background-color: #fff;
  border: 2px solid #d6d7da;
  border-radius: 10px;
  padding: 15px;
  margin: 5px 20px;
`

const DetailsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
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

const Timer = ({
  id,
  title,
  project,
  elapsed,
  isRunning,
  onEditPress,
  onRemovePress,
  onStartPress,
  onStopPress,
}) => {
  const elapsedString = millisecondsToHuman(elapsed)

  const handleStartPress = () => {
    onStartPress(id)
  }

  const handleStopPress = () => {
    onStopPress(id)
  }

  const renderActionButton = () => {
    if (isRunning) {
      return (
        <TimerButton color="#9A4C95" title="Stop" onPress={handleStopPress} />
      )
    }
    return (
      <TimerButton color="#9A4C95" title="Start" onPress={handleStartPress} />
    )
  }

  return (
    <TimerContainer>
      <DetailsContainer>
        <View>
          <Title>{title}</Title>
          <Text>{project}</Text>
        </View>
        <ElapsedTime>{elapsedString}</ElapsedTime>
      </DetailsContainer>
      <ButtonGroup>
        <TimerButton color="#F08CAE" small title="Edit" onPress={onEditPress} />
        <TimerButton
          color="#F08CAE"
          small
          title="Remove"
          onPress={onRemovePress}
        />
        {renderActionButton()}
      </ButtonGroup>
    </TimerContainer>
  )
}

export default Timer
