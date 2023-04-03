import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.scss';
import HomePage from './Pages/HomePage';
import Checkout from './Pages/CheckoutPage';
import App from './App.js'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Checkout/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

