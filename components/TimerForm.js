import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

import TimerButton from './TimerButton'

const FormContainer = styled.View`
  background-color: #fff;
  border: 2px solid #d6d7da;
  border-radius: 10px;
  padding: 10px;
  margin: 15px;
  margin-bottom: 0;
`

const AttributeContainer = styled.View`
  margin: 0 8px;
`

const TextInputTitle = styled.Text`
  border: 1px solid #d6d7da;
  border-radius: 2px;
  margin-bottom: 5px;
`

const TextInputContainer = styled.View`
  height: 30px;
  padding: 5px;
  font-size: 12px;
`

const TextInput = styled.TextInput`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`

const ButtonGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

const TimerForm = ({ id, title, project }) => {
  const submitText = id ? 'Update' : 'Cancel'

  return (
    <FormContainer>
      <AttributeContainer>
        <TextInputTitle>Title</TextInputTitle>
        <TextInputContainer>
          <TextInput underlineColorAndroid="transparent" defaultValue={title} />
        </TextInputContainer>
      </AttributeContainer>
      <AttributeContainer>
        <TextInputTitle>Project</TextInputTitle>
        <TextInputContainer>
          <TextInput
            underlineColorAndroid="transparent"
            defaultValue={project}
          />
        </TextInputContainer>
      </AttributeContainer>
      <ButtonGroup>
        <TimerButton small color="#21BA45" title={submitText} />
        <TimerButton small color="#DB2828" title="Cancel" />
      </ButtonGroup>
    </FormContainer>
  )
}

export default TimerForm
