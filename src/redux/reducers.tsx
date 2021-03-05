import { combineReducers } from "redux";
import { TODOS, ToDoInfo, ReduxStoreItem, OTHERS, ReduxStoreList, OtherInfo} from "./defs";

const todoStorageState:ReduxStoreList<ToDoInfo> = {
  list: []
};


const todoStorage= function(state = todoStorageState, payload: ReduxStoreItem<ToDoInfo>): ReduxStoreList<ToDoInfo> {
  if(payload.type==TODOS){
        return {
        list: [...state.list, payload.data]
      };
  }
  return state;
};

const othersStorageState:ReduxStoreList<OtherInfo> = {
  list: []
};
const othersStorage = function(state = othersStorageState, payload: ReduxStoreItem<OtherInfo>): ReduxStoreList<OtherInfo> {
  if(payload.type==OTHERS){
      return {
        list: [...state.list, payload.data]
      };
  }
  return state;
};
export default combineReducers({ todoStorage, othersStorage });