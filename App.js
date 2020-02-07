import React from 'react'
import { SafeAreaView, View, ScrollView, Text } from 'react-native'
import styled from 'styled-components/native'

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

const App = () => {
  return (
    <AppContainer>
      <TitleContainer>
        <Title>Timers</Title>
      </TitleContainer>
      <TimerList>
        <ToggleableTimerForm isOpen={false} />
        <EditableTimer
          id="1"
          title="Mow the lawn"
          project="House Chores"
          elapsed="8986300"
          isRunning
        />
        <EditableTimer
          id="2"
          title="Bake squash"
          project="Kitchen Chores"
          elapsed="3890985"
          editFormOpen
        />
      </TimerList>
    </AppContainer>
  )
}

export default App
