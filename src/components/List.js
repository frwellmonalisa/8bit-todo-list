import React, { Component } from "react";
import TodosInList from "./TodosInList";
import AddTodoForm from "./AddTodoForm";
import ProgressBarForList from "./ProgressBarForList";
import TodosFilter from "./TodosFilter";

export default class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: "",
        };
    }

    handleFilterTodo = (type) => {
        this.setState({
            filter: type,
        });
    };

    render() {
        const { list } = this.props;
        const { title, description, todos } = list;
        const {
            onAddTodo,
            onDeleteList,
            onToggleTodo,
            onDeleteTodo,
        } = this.props;

        return (
            <div
                className="nes-container is-dark with-title"
                style={{ marginTop: "10px" }}
            >
                <p className="title">{title}</p>
                <p>{description}</p>
                {todos.length > 0 ? (
                    <TodosInList
                        todos={todos}
                        listID={list.id}
                        onDeleteTodo={onDeleteTodo}
                        onToggleTodo={onToggleTodo}
                        filter={this.state.filter}
                    />
                ) : (
                    <p>Здесь пока ничего нет!</p>
                )}

                <AddTodoForm onAddTodo={onAddTodo} listID={list.id} />
                {todos.length > 0 && <ProgressBarForList todos={todos} />}
                {todos.length > 0 && (
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
        );
    }
}
