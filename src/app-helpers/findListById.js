/**
 * Найти список и его индекс по переданному id и вернуть в виде массива
 *
 * @param lists Список списков
 * @param id Переданный id
 */
export const findListById = (lists, id) => {
    return [
        lists.find((item) => item.id === id),
        lists.findIndex((item) => item.id === id),
    ];
};
