//error data state
export interface errorState {
    error: string | null;
  }

  export const SET_ERROR = 'SET_ERROR';
  export interface setErrorAction {
    type: typeof SET_ERROR;
    payload: string;
  }

//user list

  interface user {
    id: number;
    name: string;
  }

  export interface userList {
    users: user[];
  }

  export const SET_USERLIST = 'SET_USERLIST';
  export interface setUserListAction {
    type: typeof SET_USERLIST;
    payload: user[];
  }

  //display drawer 
 
  export const SET_DISPLAYDRAWER = 'SET_DISPLAYDRAWER';
  export interface setDisplayDrawerAction {
    type: typeof SET_DISPLAYDRAWER;
    payload: boolean;
  }

//types
  export type ActionTypes  = 
  | setErrorAction
  | setUserListAction
  | setDisplayDrawerAction
