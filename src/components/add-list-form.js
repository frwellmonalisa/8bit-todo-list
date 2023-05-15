import React, { useState } from "react"

export const AddListForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [isError, setIsError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    // Check if title is empty
    if (title === "") {
      setIsError(true)
      return
    }

    onSubmit(title, description)

    setTitle("")
    setDescription("")
    setIsError(false)
  }

  const handleChangeTitle = (e) => setTitle(e.target.value)

  const handleChangeDescription = (e) => setDescription(e.target.value)

  return (
    <div className="nes-container with-title">
      <p className="title">Добавить</p>
      <form onSubmit={handleSubmit}>
        <div className="nes-field">
          <label htmlFor="name_field">Название списка:</label>
          <input
            type="text"
            id="name_field"
            className={isError ? "nes-input is-error" : "nes-input"}
            value={title}
            onChange={handleChangeTitle}
            autoComplete="off"
            placeholder={
              isError ? "Имя списка не может быть пустым!" : "Введите название"
            }
          />
        </div>
        <label htmlFor="list-description">Описание списка:</label>
        <textarea
          id="list-description"
          className="nes-textarea"
          value={description}
          onChange={handleChangeDescription}
        ></textarea>
        <button type="submit" className="nes-btn is-primary">
          Добавить
        </button>
      </form>
    </div>
  )
}
