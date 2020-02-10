import React, { useState } from 'react'
import PropTypes from 'prop-types'

import TimerForm from './TimerForm'
import Timer from './Timer'

const EditableTimer = ({
  id,
  title,
  project,
  elapsed,
  isRunning,
  onFormSubmit,
  onRemovePress,
  onStopPress,
  onStartPress,
}) => {
  const [editFormOpen, setEditFormOpen] = useState(false)

  const closeForm = () => {
    setEditFormOpen(false)
  }

  const openForm = () => {
    setEditFormOpen(true)
  }
  const handleEditPress = () => {
    openForm()
  }

  const handleRemovePress = () => {
    onRemovePress(id)
  }

  const handleFormClose = () => {
    closeForm()
  }

  const handleSubmit = timer => {
    onFormSubmit(timer)
    closeForm()
  }

  if (editFormOpen) {
    return (
      <TimerForm
        id={id}
        title={title}
        project={project}
        onFormClose={handleFormClose}
        onFormSubmit={handleSubmit}
      />
    )
  }
  return (
    <Timer
      id={id}
      title={title}
      project={project}
      elapsed={elapsed}
      isRunning={isRunning}
      editFormOpen={editFormOpen}
      onEditPress={handleEditPress}
      onRemovePress={handleRemovePress}
      onStartPress={onStartPress}
      onStopPress={onStopPress}
    />
  )
}

EditableTimer.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  project: PropTypes.string,
  elapsed: PropTypes.number,
  isRunning: PropTypes.bool,
  onFormSubmit: PropTypes.func,
  onRemovePress: PropTypes.func,
  onStopPress: PropTypes.func,
  onStartPress: PropTypes.func,
}

export default EditableTimer
