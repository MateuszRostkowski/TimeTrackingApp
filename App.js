import React, { useState, useEffect } from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'
import uuidv4 from 'uuid/v4'
import { newTimer } from './utils/TimerUtils'

import EditableTimer from './components/EditableTimer'
import ToggleableTimerForm from './components/ToggleableTimerForm'

const AppContainer = styled.SafeAreaView`
  flex: 1;
`

const TitleContainer = styled.View`
  padding-top: 35px;
  padding-bottom: 15px;
  border-bottom-width: 1px;
  border-bottom-color: #d6d7da;
`

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`

const TimerList = styled.ScrollView`
  padding-bottom: 15px;
`

const initialTimers = [
  {
    title: 'Mow the lawn',
    project: 'House Chores',
    id: uuidv4(),
    elapsed: 5456099,
    isRunning: true,
  },
  {
    title: 'Bake squash',
    project: 'Kitchen Chores',
    id: uuidv4(),
    elapsed: 1227394000,
    isRunning: true,
  },
]

const App = () => {
  const [timers, setTimers] = useState(initialTimers)

  useEffect(() => {
    const TIME_INTERVAL = 1000
    const timerId = setInterval(() => {
      const newTimers = timers.map(timer => {
        const { elapsed, isRunning } = timer
        return {
          ...timer,
          elapsed: isRunning ? elapsed + TIME_INTERVAL : elapsed,
        }
      })
      setTimers(newTimers)
    }, TIME_INTERVAL)
    return () => clearInterval(timerId)
  }, [timers])

  const handleCreateFormSubmit = timer => {
    const newTimers = [newTimer(timer), ...timers]
    setTimers(newTimers)
  }

  const handleFormSubmit = attrs => {
    const newTimers = timers.map(timer => {
      if (timer.id === attrs.id) {
        const { projectTitle, projectName } = attrs
        return {
          ...timer,
          title: projectTitle,
          project: projectName,
        }
      }
      return timer
    })
    setTimers(newTimers)
  }

  const handleRemovePress = attrs => {
    const newTimers = timers.filter(timer => timer.id !== attrs)
    setTimers(newTimers)
  }

  return (
    <AppContainer>
      <TitleContainer>
        <Title>Timers</Title>
      </TitleContainer>
      <TimerList>
        <ToggleableTimerForm
          isOpen={false}
          onFormSubmit={handleCreateFormSubmit}
        />
        {timers.map(({ title, project, id, elapsed, isRunning }) => (
          <EditableTimer
            key={id}
            id={id}
            title={title}
            project={project}
            elapsed={elapsed}
            isRunning={isRunning}
            onFormSubmit={handleFormSubmit}
            onRemovePress={handleRemovePress}
          />
        ))}
      </TimerList>
    </AppContainer>
  )
}

export default App
