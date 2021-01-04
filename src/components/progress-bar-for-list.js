import React, { Fragment } from "react"

export const ProgressBarForList = ({ todos }) => {
  const todosCount = todos.length
  const isDoneTodosCount = todos.filter((todo) => todo.isDone).length

  return (
    <Fragment>
      <p className="progress-bar-label">Ваш прогресс:</p>
      <progress
        className="nes-progress is-success"
        value={isDoneTodosCount}
        max={todosCount}
      />
    </Fragment>
  )
}
