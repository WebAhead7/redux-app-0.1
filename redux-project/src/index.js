import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import allRedusers from './reducers'
import { Provider } from 'react-redux';
const store = createStore(allRedusers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);










// const increment = () => {
//   return {
//     type: 'INCREMENT'
//   }
// };

// const decrement = () => {
//   return {
//     type: 'DECREMENT'
//   }
// };
// const counter = (state = 0, action) => {
//   switch (action.type) {

//     case 'INCREMENT':
//       return state + 1;

//     case 'DECREMENT':
//       return state - 1;
//   }
// };
// let store = createStore(counter);

// store.subscribe(() => {
//   console.log(store.getState())
// });

// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());

