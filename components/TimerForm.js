import React, { useState } from 'react'
import styled from 'styled-components/native'

import TimerButton from './TimerButton'

const FormContainer = styled.View`
  background-color: #fff;
  border: 2px solid #d6d7da;
  border-radius: 10px;
  padding: 10px;
  margin: ${props => (props.margin ? '5px 20px' : '0')};
`

const AttributeContainer = styled.View``

const TextInputContainer = styled.View`
  border: 1px solid #d6d7da;
  border-radius: 2px;
  margin-bottom: 5px;
  padding: 5px;
`

const TextInputTitle = styled.Text`
  height: 30px;
  padding: 5px;
  font-size: 12px;
`

const TextInput = styled.TextInput`
  font-size: 14px;
  font-weight: bold;
`

const ButtonGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

const TimerForm = ({ id, title, project, onFormClose, onFormSubmit }) => {
  const [projectTitle, setProjectTitle] = useState(id ? title : '')
  const [projectName, setProjectName] = useState(id ? project : '')
  const submitText = id ? 'Update' : 'Create'

  const handleTitleChange = title => setProjectTitle(title)
  const handleNameChange = name => setProjectName(name)

  const handleSubmit = () => {
    onFormSubmit({
      id,
      projectTitle,
      projectName,
    })
  }

  return (
    <FormContainer margin={id ? true : false}>
      <AttributeContainer>
        <TextInputTitle>Title</TextInputTitle>
        <TextInputContainer>
          <TextInput
            underlineColorAndroid="transparent"
            value={projectTitle}
            onChangeText={handleTitleChange}
          />
        </TextInputContainer>
      </AttributeContainer>
      <AttributeContainer>
        <TextInputTitle>Project</TextInputTitle>
        <TextInputContainer>
          <TextInput
            underlineColorAndroid="transparent"
            value={projectName}
            onChangeText={handleNameChange}
          />
        </TextInputContainer>
      </AttributeContainer>
      <ButtonGroup>
        <TimerButton
          small
          color="#21BA45"
          title={submitText}
          onPress={handleSubmit}
        />
        <TimerButton
          small
          color="#DB2828"
          title="Cancel"
          onPress={onFormClose}
        />
      </ButtonGroup>
    </FormContainer>
  )
}

export default TimerForm
