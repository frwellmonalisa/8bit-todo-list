import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { List } from "./components/list"
import { AddListForm } from "./components/add-list-form"
import { About } from "./components/about"

import { insertOnIndex } from "./app-helpers/insert-on-index"
import { createNewTodo } from "./app-helpers/create-new-todo"
import { findListById } from "./app-helpers/find-list-by-id"
import { findTodoById } from "./app-helpers/find-todo-by-id"
import { createNewList } from "./app-helpers/create-new-list"
import { useLocalStorage } from "./hooks/use-local-storage"

export const App = () => {
  const [lists, setLists] = useLocalStorage("lists", [])

  const handleAddList = (title, description) => {
    const newList = createNewList(title, description)

    setLists((prevLists) => [...prevLists, newList])
  }

  const handleDeleteList = (listID) => {
    const filtered = lists.filter((list) => list.id !== listID)
    setLists(filtered)
  }

  const handleAddTodo = (listID, name) => {
    const newTodo = createNewTodo(name)

    const [listToEdit, listToEditIndex] = findListById(lists, listID)

    const editedList = {
      ...listToEdit,
      todos: [...listToEdit.todos, newTodo],
    }

    setLists((prevLists) =>
      insertOnIndex(prevLists, listToEditIndex, editedList)
    )
  }

  const handleToggleTodo = (listID, todoID) => {
    const [listToEdit, listToEditIndex] = findListById(lists, listID)
    const [todoToEdit, todoToEditIndex] = findTodoById(listToEdit.todos, todoID)

    const editedTodo = { ...todoToEdit, isDone: !todoToEdit.isDone }
    const editedList = {
      ...listToEdit,
      todos: insertOnIndex(listToEdit.todos, todoToEditIndex, editedTodo),
    }

    setLists((prevLists) =>
      insertOnIndex(prevLists, listToEditIndex, editedList)
    )
  }

  const handleDeleteTodo = (listID, todoID) => {
    const [listToEdit, listToEditIndex] = findListById(lists, listID)

    const editedList = {
      ...listToEdit,
      todos: listToEdit.todos.filter((todo) => todo.id !== todoID),
    }

    setLists((prevLists) =>
      insertOnIndex(prevLists, listToEditIndex, editedList)
    )
  }

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1 className="text-center">8Bit ToDo List</h1>
          <div className="nes-container is-dark is-centered">
            <p>
              Привет! Это классический туду лист. Он настолько классический, что
              даже оформление у него в духе игр 8-битной эпохи. Заведи свои
              списки прямо сейчас! Данные будут храниться в твоем браузере, пока
              ты не почистишь кэш.
            </p>
          </div>
        </Col>
      </Row>
      <Row className="my-4">
        <Col md={4}>
          <div className="nes-balloon from-left">
            <p>
              Воспользуйся формой рядом со мной, чтобы добавить новый список!
            </p>
          </div>
          <i className="nes-mario"></i>
        </Col>
        <Col md={8}>
          <AddListForm onSubmit={handleAddList} />
        </Col>
      </Row>
      <Row>
        {lists.map((list) => (
          <Col lg={6} key={list.id}>
            <List
              list={list}
              onAddTodo={handleAddTodo}
              onDeleteList={handleDeleteList}
              onToggleTodo={handleToggleTodo}
              onDeleteTodo={handleDeleteTodo}
            />
          </Col>
        ))}
      </Row>
      <About />
    </Container>
  )
}
