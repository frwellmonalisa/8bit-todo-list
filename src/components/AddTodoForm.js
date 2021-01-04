import React, { Component } from "react";

export default class AddTodoForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            isError: false,
        };
    }

    handleChange = (e) => {
        e.preventDefault();

        this.setState({
            name: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const { name } = this.state;

        // Проверка на пустое поле названия списка
        if (name === "") {
            this.setState({
                isError: true,
            });

            return;
        }

        this.props.onAddTodo(this.props.listID, name);

        this.setState({
            name: "",
            isError: false,
        });
    };

    render() {
        const { isError } = this.state;

        return (
            <form onSubmit={this.handleSubmit} className="nes-field is-inline">
                <input
                    type="text"
                    id="inline_field"
                    className={isError ? "nes-input is-error" : "nes-input"}
                    placeholder={isError ? "Пусто!" : "Добавить задачу"}
                    value={this.state.name}
                    onChange={this.handleChange}
                    autoComplete="off"
                />
                <button type="submit" className="nes-btn is-primary">
                    +
                </button>
            </form>
        );
    }
}
