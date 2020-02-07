import React, { useState } from 'react'
import styled from 'styled-components/native'
import uuidv4 from 'uuid/v4'

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
    elapsed: 1227392928,
    isRunning: false,
  },
]

const App = () => {
  const [timers, setTimers] = useState(initialTimers)

  return (
    <AppContainer>
      <TitleContainer>
        <Title>Timers</Title>
      </TitleContainer>
      <TimerList>
        <ToggleableTimerForm isOpen={false} />
        {timers.map(({ title, project, id, elapsed, isRunning }) => (
          <EditableTimer
            key={id}
            id={id}
            title={title}
            project={project}
            elapsed={elapsed}
            isRunning={isRunning}
          />
        ))}
      </TimerList>
    </AppContainer>
  )
}

export default App
