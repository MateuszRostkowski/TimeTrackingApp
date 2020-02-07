import React from 'react'

import TimerForm from './TimerForm'
import Timer from './Timer'

const EditableTimer = ({
  id,
  title,
  project,
  elapsed,
  isRunning,
  editFormOpen,
}) => {
  if (editFormOpen) {
    return <TimerForm id={id} title={title} project={project} />
  }
  return (
    <Timer
      id={id}
      title={title}
      elapsed={elapsed}
      isRunning={isRunning}
      editFormOpen={editFormOpen}
    />
  )
}

export default EditableTimer
