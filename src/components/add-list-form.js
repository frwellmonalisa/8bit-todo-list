import React, { Component } from "react"

export class AddListForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      description: "",
      isError: false,
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { title, description } = this.state

    // Проверка на пустое поле названия списка
    if (title === "") {
      this.setState({
        isError: true,
      })

      return
    }

    this.props.onSubmit(title, description)

    this.setState({
      title: "",
      description: "",
      isError: false,
    })
  }

  handleChangeTitle = (e) => {
    this.setState({
      title: e.target.value,
    })
  }

  handleChangeDescription = (e) => {
    this.setState({
      description: e.target.value,
    })
  }

  render() {
    const { title, description, isError } = this.state

    return (
      <div className="nes-container with-title">
        <p className="title">Добавить</p>
        <form onSubmit={this.handleSubmit}>
          <div className="nes-field">
            <label htmlFor="name_field">Название списка:</label>
            <input
              type="text"
              id="name_field"
              className={isError ? "nes-input is-error" : "nes-input"}
              value={title}
              onChange={this.handleChangeTitle}
              autoComplete="off"
              placeholder={
                isError
                  ? "Имя списка не может быть пустым!"
                  : "Введите название"
              }
            />
          </div>
          <label htmlFor="list-description">Описание списка:</label>
          <textarea
            id="list-description"
            className="nes-textarea"
            value={description}
            onChange={this.handleChangeDescription}
          ></textarea>
          <button type="submit" className="nes-btn is-primary">
            Добавить
          </button>
        </form>
      </div>
    )
  }
}
