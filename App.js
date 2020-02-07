import React, { useState, useEffect } from 'react'
import { StatusBar } from 'react-native'
import styled from 'styled-components/native'
import uuidv4 from 'uuid/v4'
import { newTimer } from './utils/TimerUtils'

import EditableTimer from './components/EditableTimer'
import ToggleableTimerForm from './components/ToggleableTimerForm'

const AppContainer = styled.SafeAreaView`
  background: #052555;
  flex: 1;
`

const TitleContainer = styled.View`
  padding: 20px 0;
`

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: white;
`

const TimerList = styled.ScrollView`
  background-color: white;
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

  const toggleTimmer = timmerId => {
    const newTimers = timers.map(timer => {
      const { id, isRunning } = timer

      if (id === timmerId) {
        return {
          ...timer,
          isRunning: !isRunning,
        }
      }
      return timer
    })
    setTimers(newTimers)
  }

  return (
    <AppContainer>
      <StatusBar barStyle="light-content" />
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
            onStartPress={toggleTimmer}
            onStopPress={toggleTimmer}
          />
        ))}
      </TimerList>
    </AppContainer>
  )
}

export default App
