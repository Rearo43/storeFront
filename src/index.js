import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App.js';
// import * as serviceWorker from './serviceWorker';
import store from './store/';

function Main(){
  return (
  <Provider store={store}>
    <App />
  </Provider>
  )
}


const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
