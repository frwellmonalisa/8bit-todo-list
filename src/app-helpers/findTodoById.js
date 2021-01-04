/**
 * Найти todo в todo листе и его индекс по переданному id и вернуть в виде массива
 *
 * @param list ToDo лист
 * @param id Переданный ID
 */
export const findTodoById = (list, id) => {
    return [
        list.find((item) => item.id === id),
        list.findIndex((item) => item.id === id),
    ];
};
