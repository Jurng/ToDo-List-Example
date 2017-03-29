import React , { PropTypes } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { loadState, saveState } from './api/localStorage'
import reducer from './reducers'

import App from './components/App'

const persistedState = loadState();
let store = createStore(reducer,persistedState);

//call all the time
store.subscribe(() => {
  saveState(store.getState());
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

