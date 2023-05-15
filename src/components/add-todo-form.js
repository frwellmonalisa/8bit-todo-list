import React, { useState } from "react"

export const AddTodoForm = (props) => {
  const [name, setName] = useState("")
  const [isError, setIsError] = useState(false)

  const handleChange = (e) => {
    e.preventDefault()
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (name === "") {
      setIsError(true)
      return
    }

    props.onAddTodo(props.listID, name)

    setName("")
    setIsError(false)
  }

  return (
    <form onSubmit={handleSubmit} className="nes-field is-inline">
      <input
        type="text"
        id="inline_field"
        className={isError ? "nes-input is-error" : "nes-input"}
        placeholder={isError ? "Пусто!" : "Добавить задачу"}
        value={name}
        onChange={handleChange}
        autoComplete="off"
      />
      <button type="submit" className="nes-btn is-primary">
        +
      </button>
    </form>
  )
}
