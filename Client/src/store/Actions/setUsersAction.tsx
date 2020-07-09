import {
    ActionTypes,
    SET_USERLIST,
  } from '../types';

  interface user {
      id: number;
      name: string;
  }

export const setUsersAction = (users: user[]): ActionTypes => ({
    type: SET_USERLIST,
    payload: users,
  });