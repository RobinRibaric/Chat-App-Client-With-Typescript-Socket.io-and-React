import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import ErrorReducer from './Reducers/ErrorReducer';
import UsersReducer from './Reducers/UsersReducer';
import DisplayDrawerReducer from './Reducers/DisplayDraweReducer';


const rootReducer = combineReducers({
    ErrorReducer,
    UsersReducer,
    DisplayDrawerReducer,
  });

  export const store = createStore(rootReducer, composeWithDevTools());

  export type RootState = ReturnType<typeof rootReducer>;