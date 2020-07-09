import { userList, ActionTypes, SET_USERLIST } from '../types';

const initialState: userList = {
  users: [],
};

export default (state = initialState, action: ActionTypes): userList => {
  switch (action.type) {
    case SET_USERLIST:
      return { users: action.payload };

    default:
      return state;
  }
};