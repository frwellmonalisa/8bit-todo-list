import { insertOnIndex } from "./insertOnIndex";

export const updateLists = (index, list) => (prevState) => {
    const newLists = insertOnIndex(prevState.lists, index, list);

    // Сохранение изменений в localStorage
    localStorage.setItem("lists", JSON.stringify(newLists));
    return {
        lists: newLists,
    };
};
