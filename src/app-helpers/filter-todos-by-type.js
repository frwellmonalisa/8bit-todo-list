/**
 * Отфильтровать список тудушек внутри одного списка задач
 *
 * @param {*} todos Тудушки
 * @param {*} type Тип фильтра // all, done, undone
 */
export const filterTodosByType = (todos, type = "all") => {
  let filteredTodos = []
  switch (type) {
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

  return filteredTodos
}
