import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/index';

import Join from './pages/landingPage/Join';
import Chat from './pages/ChatPage/Chat';

import './App.css';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Route path="/" exact component={Join}/>
      <Route path="/chat" exact component={Chat}/>
    </Router>

    </Provider>
  );
}

export default App;
