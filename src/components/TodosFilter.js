import React from "react";

const TodosFilter = ({ onFilterTodo, filter }) => {
    return (
        <div className="form_part">
            <label htmlFor="filter_select" className="filter_select">
                Фильтр:
            </label>
            <div className="nes-select is-dark">
                <select
                    required
                    id="filter_select"
                    className="filter_select"
                    onChange={e => onFilterTodo(e.target.value)}
                    value={filter}
                >
                    <option value="" disabled hidden>
                        Показать
                    </option>
                    <option value="undone" className="nes-pointer">
                        Невыполненные
                    </option>
                    <option value="done" className="nes-pointer">
                        Выполненные
                    </option>
                    <option value="all" className="nes-pointer">
                        Все
                    </option>
                </select>
            </div>
        </div>
    );
};

export default TodosFilter;
