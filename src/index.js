import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './containers/Main';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import activityReducer from './reducers/activity_reducer';

const initialState = {
  currentActivity: null,
  selectedActivities: []
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  activityReducer, initialState,
  composeEnhancers(applyMiddleware(thunk))
);


ReactDOM.render(
  <Provider store ={store}>
    <Main />
  </Provider>,
document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
