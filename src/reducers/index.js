import { combineReducers } from "redux";
import UserListReducer from "./UsersListReducer";

export default combineReducers({
  UserList: UserListReducer
});
