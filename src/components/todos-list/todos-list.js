import React from "react"
import "./todos-list.css"

export const TodosList = ({ todos, listID, onToggleTodo, onDeleteTodo }) => {
  return (
    <ul className="nes-list is-disc todos-list">
      {todos.map(({ id, name, isDone }) => (
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
