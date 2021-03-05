export const TODOS = "ADD_TODO";
export const OTHERS = "OTHERS";
export interface ToDoInfo{
    id: number,
    content: string
}

export interface OtherInfo{
    code: string,
    extra: string
}

export interface ReduxStoreItem<T>{
    type: string,
    data: T
}
export interface ReduxStoreList<T>{
    list: T[]
}
export interface ReduxStore{
    todoStorage: {
        list: ToDoInfo[]
    },
    otherStorage: {
        list: OtherInfo[]
    }
}

