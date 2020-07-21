import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import ErrorReducer from './Reducers/ErrorReducer';
import UsersReducer from './Reducers/UsersReducer';

const rootReducer = combineReducers({
    ErrorReducer,
    UsersReducer,
  });

  export const store = createStore(rootReducer, composeWithDevTools());

  export type RootState = ReturnType<typeof rootReducer>;