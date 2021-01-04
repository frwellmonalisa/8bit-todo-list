import React from "react"
import "./style.css"

const TodosInList = ({ todos, listID, onToggleTodo, onDeleteTodo, filter }) => {
  let filteredTodos = []

  switch (filter) {
    case "all":
      filteredTodos = [...todos]
      break
    case "done":
      filteredTodos = todos.filter((todo) => todo.isDone)
      break
    case "undone":
      filteredTodos = todos.filter((todo) => !todo.isDone)
      break
    default:
      filteredTodos = [...todos]
  }

  return (
    <ul className="nes-list is-disc todos-list">
      {filteredTodos.map(({ id, name, isDone }) => (
        <li key={id}>
          <span
            className="nes-text is-error nes-pointer"
            onClick={() => onDeleteTodo(listID, id)}
          >
            [x]
          </span>
          {" " + name + " "}
          <span
            className={`nes-text nes-pointer ${
              isDone ? "is-success" : "is-error"
            }`}
            onClick={() => onToggleTodo(listID, id)}
          >
            {isDone ? "[завершено]" : "[незавершено]"}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default TodosInList
