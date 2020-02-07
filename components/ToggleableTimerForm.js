import React, { useState } from 'react'
import styled from 'styled-components/native'
import TimerForm from './TimerForm'
import TimerButton from './TimerButton'

const Container = styled.View`
  padding: 0 10px;
`

const ToggleableTimerForm = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleFormOpen = () => setIsOpen(true)

  return (
    <Container>
      {isOpen ? (
        <TimerForm />
      ) : (
        <TimerButton title="+" color="#000" onPress={handleFormOpen} />
      )}
    </Container>
  )
}

export default ToggleableTimerForm
