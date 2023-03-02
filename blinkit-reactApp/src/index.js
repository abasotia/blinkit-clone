import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './components/UI/pages/HomePage/homePage';
import Checkout from './components/UI/pages/CheckoutPage/checkout';
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <HomePage/>
      {/* <Checkout/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

