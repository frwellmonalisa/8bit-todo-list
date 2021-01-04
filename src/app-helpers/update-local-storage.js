/**
 *
 * Обновить localStorage новыми данными о списках todo
 *
 * @param {*} data Данные списков в JSON строке
 */

export const updateLocalStorage = (data) => {
  localStorage.setItem("lists", data)
}
