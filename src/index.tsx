import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import './index.css';
import App from './App';


ReactDOM.render(
  <div>
    <Provider store={store}>
    <React.StrictMode>
    <App title="App 2"/>
    </React.StrictMode>
    </Provider>
  </div>,

  document.getElementById('root')
);
