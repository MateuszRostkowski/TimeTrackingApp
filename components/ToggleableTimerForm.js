import React from 'react'
import styled from 'styled-components/native'
import TimerForm from './TimerForm'
import TimerButton from './TimerButton'

const Container = styled.View`
  padding: 0 10px;
`

const ToggleableTimerForm = ({ isOpen }) => {
  return (
    <Container>
      {isOpen ? <TimerForm /> : <TimerButton title="+" color="#000" />}
    </Container>
  )
}

export default ToggleableTimerForm
