import {
    ActionTypes,
    SET_DISPLAYDRAWER,
  } from '../types';

export const setDisplayDrawerAction = (displayDrawer: boolean): ActionTypes => ({
    type: SET_DISPLAYDRAWER,
    payload: displayDrawer,
  });