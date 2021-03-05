import { ReduxStore, ReduxStoreItem, ToDoInfo, TODOS } from "./defs";

let nextTodoId = 0;
export const addTodo = (content:string): ReduxStoreItem<ToDoInfo> => {
  return {
    type: TODOS,
    data: {
      id: ++nextTodoId,
      content
    }
  };
};

export const getTodos = (reduxStore:ReduxStore)=> {
  return {list:reduxStore.todoStorage.list};
};