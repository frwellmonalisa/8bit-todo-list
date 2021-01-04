/**
 * Функция, вставляющая элемент на место index в список list и возвращающая новый массив
 *
 * @param list Список
 * @param index Индекс вставки
 * @param element Вставляемый элемент
 */
export const insertOnIndex = (list, index, element) => {
    return [...list.slice(0, index), element, ...list.slice(index + 1)];
};
