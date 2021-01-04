import shortid from "shortid";

export const createNewList = (title, description) => {
    return { id: shortid(), title, description, todos: [] };
};
