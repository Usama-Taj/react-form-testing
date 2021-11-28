import jsonplaceholder from "../api/jsonplaceholder";

// NON ASYNC AWAIT USERS
// export const addUserAction = (user) => {
//   return { type: "ADD_USER", payload: user };
// };

// export const deleteUserAction = (id) => {
//   return { type: "DELETE_USER", payload: id };
// };

// ASYNC AWAIT USERS
export const getUsersAction = () => async (dispatch) => {
  const response = await jsonplaceholder.get("/users");
  console.log(response);
  dispatch({ type: "FETCH_USERS", payload: response.data });
};

export const addUserAction = (user) => async (dispatch, getState) => {
  const response = await jsonplaceholder.post("/users", user, {
    headers: { "Content-Type": "application/json" },
  });
  response.status >= 200 &&
    response.status <= 300 &&
    (await dispatch(getUsersAction()));
  dispatch({
    type: "ADD_USER",
    payload: response.status,
  });
};

export const deleteUserAction = (id) => async (dispatch, getState) => {
  const response = await jsonplaceholder.delete(`users/${id}`);
  response.status >= 200 &&
    response.status <= 300 &&
    (await dispatch(getUsersAction()));
  console.log(getState.users);
  dispatch({
    type: "DELETE_USER",
    payload: response.status,
  });
};
