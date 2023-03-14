import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './HomePage/homePage';
import {createStore} from "redux";
import { Provider } from 'react-redux';
import './styles.css';
import cartReducer from './redux/cartReducers';

const store = createStore(cartReducer)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HomePage/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

