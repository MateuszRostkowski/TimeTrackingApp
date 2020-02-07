import React from 'react'
import { SafeAreaView, View, ScrollView, Text } from 'react-native'
import styled from 'styled-components/native'

// import EditableTimer from "./components/EditableTimer"
// import ToggleableTimerForm from "./components/ToggleableTimerForm"

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
        <Text>Here would be list of timmers :D</Text>
      </TimerList>
    </AppContainer>
  )
}

export default App
