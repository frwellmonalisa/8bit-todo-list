import React, { Component } from "react"
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
import { updateLocalStorage } from "./app-helpers/update-local-storage"

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lists: [],
    }
  }

  componentDidMount() {
    const data = localStorage.getItem("lists")
    const lists = data ? JSON.parse(data) : []
    this.setState({ lists: lists })
  }

  handleAddList = (title, description) => {
    const newList = createNewList(title, description)

    this.setState(
      {
        lists: [...this.state.lists, newList],
      },
      () => updateLocalStorage(JSON.stringify(this.state.lists))
    )
  }

  handleDeleteList = (listID) => {
    const filtered = this.state.lists.filter((list) => list.id !== listID)

    this.setState(
      {
        lists: filtered,
      },
      () => updateLocalStorage(JSON.stringify(this.state.lists))
    )
  }

  handleAddTodo = (listID, name) => {
    const newTodo = createNewTodo(name)

    const [listToEdit, listToEditIndex] = findListById(this.state.lists, listID)

    // Создаем обновленный список
    const editedList = {
      ...listToEdit,
      todos: [...listToEdit.todos, newTodo],
    }

    this.setState(
      {
        lists: insertOnIndex(this.state.lists, listToEditIndex, editedList),
      },
      () => updateLocalStorage(JSON.stringify(this.state.lists))
    )
  }

  handleToggleTodo = (listID, todoID) => {
    const [listToEdit, listToEditIndex] = findListById(this.state.lists, listID)
    const [todoToEdit, todoToEditIndex] = findTodoById(listToEdit.todos, todoID)

    const editedTodo = { ...todoToEdit, isDone: !todoToEdit.isDone } // Сам тоггл
    const editedList = {
      ...listToEdit,
      todos: insertOnIndex(listToEdit.todos, todoToEditIndex, editedTodo),
    } // Вставка в список

    this.setState(
      {
        lists: insertOnIndex(this.state.lists, listToEditIndex, editedList),
      },
      () => updateLocalStorage(JSON.stringify(this.state.lists))
    )
  }

  handleDeleteTodo = (listID, todoID) => {
    const [listToEdit, listToEditIndex] = findListById(this.state.lists, listID)

    const editedList = {
      ...listToEdit,
      todos: listToEdit.todos.filter((todo) => todo.id !== todoID),
    }

    this.setState(
      {
        lists: insertOnIndex(this.state.lists, listToEditIndex, editedList),
      },
      () => updateLocalStorage(JSON.stringify(this.state.lists))
    )
  }

  render() {
    const lists = this.state.lists.map((list) => (
      <Col lg={6} key={list.id}>
        <List
          list={list}
          onAddTodo={this.handleAddTodo}
          onDeleteList={this.handleDeleteList}
          onToggleTodo={this.handleToggleTodo}
          onDeleteTodo={this.handleDeleteTodo}
        />
      </Col>
    ))

    return (
      <Container>
        <Row className="my-4">
          <Col>
            <h1 className="text-center">8Bit ToDo List</h1>
            <div className="nes-container is-dark is-centered">
              <p>
                Привет! Это классический туду лист. Он настолько классический,
                что даже оформление у него в духе игр 8-битной эпохи. Заведи
                свои списки прямо сейчас! Данные будут храниться в твоем
                браузере, пока ты не почистишь кэш.
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
            <AddListForm onSubmit={this.handleAddList} />
          </Col>
        </Row>
        <Row>{lists}</Row>
        <About />
      </Container>
    )
  }
}
