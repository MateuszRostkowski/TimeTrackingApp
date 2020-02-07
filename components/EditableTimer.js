import React, { useState } from 'react'

import TimerForm from './TimerForm'
import Timer from './Timer'

const EditableTimer = ({
  id,
  title,
  project,
  elapsed,
  isRunning,
  onFormSubmit,
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
      elapsed={elapsed}
      isRunning={isRunning}
      editFormOpen={editFormOpen}
      onEditPress={handleEditPress}
    />
  )
}

export default EditableTimer
