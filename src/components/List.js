import React, { Component } from "react"
import { TodosList } from "./todos-list/todos-list"
import { AddTodoForm } from "./add-todo-form"
import { ProgressBarForList } from "./progress-bar-for-list"
import { TodosFilter } from "./todos-filter"
import { filterTodosByType } from "../app-helpers/filter-todos-by-type"

export class List extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filter: "",
    }
  }

  handleFilterTodo = (type) => {
    this.setState({
      filter: type,
    })
  }

  render() {
    const { list } = this.props
    const { title, description, todos } = list
    const { onAddTodo, onDeleteList, onToggleTodo, onDeleteTodo } = this.props

    const hasTodos = todos.length > 0
    const filteredTodos = filterTodosByType(todos, this.state.filter)

    return (
      <div
        className="nes-container is-dark with-title"
        style={{ marginTop: "10px" }}
      >
        <p className="title">{title}</p>
        <p>{description}</p>
        {hasTodos ? (
          <TodosList
            todos={filteredTodos}
            listID={list.id}
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
          />
        ) : (
          <p>Здесь пока ничего нет!</p>
        )}
        <AddTodoForm onAddTodo={onAddTodo} listID={list.id} />
        {hasTodos && <ProgressBarForList todos={todos} />}
        {hasTodos && (
          <TodosFilter
            onFilterTodo={this.handleFilterTodo}
            filter={this.state.filter}
          />
        )}
        <button
          className="nes-btn is-error col-12"
          onClick={() => onDeleteList(list.id)}
        >
          Удалить список
        </button>
      </div>
    )
  }
}
