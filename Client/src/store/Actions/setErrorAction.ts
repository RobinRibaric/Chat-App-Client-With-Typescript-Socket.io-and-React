import {
    ActionTypes,
    SET_ERROR,
  } from '../types';

export const setErrorAction = (error: string): ActionTypes => ({
    type: SET_ERROR,
    payload: error,
  });