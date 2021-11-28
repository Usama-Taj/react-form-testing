import { combineReducers } from "redux";

const UserReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_USER":
      return state;
    case "DELETE_USER":
      return state;
    case "FETCH_USERS":
      return [...action.payload];
    default:
      return state;
  }
};

export default combineReducers({ users: UserReducer });
