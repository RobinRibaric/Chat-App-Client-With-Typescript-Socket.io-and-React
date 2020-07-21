import { ActionTypes, SET_DISPLAYDRAWER } from '../types';


const initialState: boolean = false;

export default (state = initialState, action: ActionTypes): boolean => {
  switch (action.type) {
    case SET_DISPLAYDRAWER:
      return  action.payload ;

    default:
      return state;
  }
};