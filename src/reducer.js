import { SET_USER, REMOVE_USER } from "./types";

export const initialState = {
  email: ' ',
  token: ' ',
  id: ' ',
};

export default function reducer(state, action) {
  const newState = {
    ...state,
  };
  switch (action.type) {
    case SET_USER: {
      newState.email = action.payload.email;
      newState.token = action.payload.token;
      newState.id = action.payload.id;
    }
    case REMOVE_USER: {
      newState.email = null;
      newState.token = null;
      newState.id = null;
    }
  }
  return state;
}
