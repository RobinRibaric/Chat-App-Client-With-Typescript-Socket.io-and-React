import { errorState, ActionTypes, SET_ERROR } from '../types';

const initialState: errorState = {
  error: null,
};

export default (state = initialState, action: ActionTypes): errorState => {
  switch (action.type) {
    case SET_ERROR:
      return { error: action.payload };

    default:
      return state;
  }
};