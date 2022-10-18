import {
    SET_USER,
    REMOVE_USER
  } from './types';
  
  export const setAuthUser = (payload) => ({
    type: SET_USER,
    payload: payload,
  });
  
  export const removeAuthUser = (params) => ({
    type: REMOVE_USER,
    payload: params,
  });
  
 