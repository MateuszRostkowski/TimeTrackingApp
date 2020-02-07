import React, { useState } from 'react'
import styled from 'styled-components/native'
import TimerForm from './TimerForm'
import TimerButton from './TimerButton'

const Container = styled.View`
  margin: 5px 20px;
`

const ToggleableTimerForm = ({ onFormSubmit }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleFormOpen = () => setIsOpen(true)
  const handleFormClose = () => setIsOpen(false)
  const handleFormSubmit = timer => {
    onFormSubmit(timer)
    setIsOpen(false)
  }

  return (
    <Container>
      {isOpen ? (
        <TimerForm
          onFormClose={handleFormClose}
          onFormSubmit={handleFormSubmit}
        />
      ) : (
        <TimerButton title="+" color="#000" onPress={handleFormOpen} dashed />
      )}
    </Container>
  )
}

export default ToggleableTimerForm
