import React from 'react'
import styled from 'styled-components/native'
import PropTypes from 'prop-types'

const Button = styled.TouchableOpacity`
  margin-top: 10px;
  min-width: 100px;
  border-radius: 3px;
  border-width: 2px;
  background-color: ${props => props.borderColor};
  border-color: ${props => props.borderColor};
  border-style: ${props => (props.dashed ? 'dashed' : 'solid')};
`

const ButtonText = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  padding: 8px 16px;
  color: white;
`

const TimerButton = ({ color, title, small, onPress, dashed }) => (
  <Button borderColor={color} onPress={onPress} dashed={dashed}>
    <ButtonText color={color}>{title}</ButtonText>
  </Button>
)

TimerButton.PropTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  small: PropTypes.bool,
  onPress: PropTypes.func,
  dashed: PropTypes.bool,
}

export default TimerButton
