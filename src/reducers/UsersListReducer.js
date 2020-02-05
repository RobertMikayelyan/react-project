const initialState = {};

function UserListReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USERS_LIST":
      return { users: action.payload };

    default:
      return state;
  }
}
export default UserListReducer;
