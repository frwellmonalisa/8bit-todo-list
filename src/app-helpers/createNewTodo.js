import shortid from "shortid";

export const createNewTodo = (name) => {
    return { id: shortid(), name, isDone: false };
};
