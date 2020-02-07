import React from 'react'
import styled from 'styled-components/native'

const Button = styled.TouchableOpacity`
  margin-top: 10px;
  min-width: 100px;
  border-radius: 3px;
  border-width: 2px;
  border-color: ${props => props.borderColor};
`

const ButtonText = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: ${props => (props.small ? '14px' : '16px')};
  padding: ${props => (props.small ? '14px' : '16px')};
  color: ${props => props.color};
`

const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
`

const ElapsedTime = styled.View`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  padding: 0 10px;
`

const TimerButton = ({ color, title, small, onPress }) => (
  <Button borderColor={color} onPress={onPress}>
    <ButtonText small={small} color={color}>
      {title}
    </ButtonText>
  </Button>
)

export default TimerButton
