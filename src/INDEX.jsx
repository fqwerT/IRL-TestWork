import React, { useContext, useReducer } from 'react';
import reducer, { initialState } from './reducer';

export * from './types';
export * from './actions';

export const Context = React.createContext();

export const useStore = () => useContext(Context);

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};