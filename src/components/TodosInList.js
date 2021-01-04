import React from "react";

const TodosInList = ({ todos, listID, onToggleTodo, onDeleteTodo, filter }) => {
    let filteredTodos = [];

    switch (filter) {
        case "all":
            filteredTodos = [...todos];
            break;
        case "done":
            filteredTodos = todos.filter(todo => todo.isDone);
            break;
        case "undone":
            filteredTodos = todos.filter(todo => !todo.isDone);
            break;
        default:
            filteredTodos = [...todos];
    }

    return (
        <ul className="nes-list is-disc">
            {filteredTodos.map(({ id, name, isDone }) => {
                return isDone ? (
                    <li key={id}>
                        {name}{" "}
                        <span
                            className="nes-text is-success nes-pointer"
                            onClick={() => onToggleTodo(listID, id)}
                        >
                            [завершено]
                        </span>{" "}
                        -{" "}
                        <span
                            className="nes-text is-error nes-pointer"
                            onClick={() => onDeleteTodo(listID, id)}
                        >
                            [x]
                        </span>
                    </li>
                ) : (
                    <li key={id}>
                        {name}{" "}
                        <span
                            className="nes-text is-error nes-pointer"
                            onClick={() => onToggleTodo(listID, id)}
                        >
                            [незавершено]
                        </span>{" "}
                        -{" "}
                        <span
                            className="nes-text is-error nes-pointer"
                            onClick={() => onDeleteTodo(listID, id)}
                        >
                            [x]
                        </span>
                    </li>
                );
            })}
        </ul>
    );
};

export default TodosInList;
