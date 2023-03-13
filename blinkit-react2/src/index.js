import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore} from "redux";
import { Provider } from 'react-redux';
import cartReducer from './redux/cartReducer';
import CheckoutPage from './CheckoutPage/checkoutPage';
import './styles.scss';


const store = createStore(cartReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <CheckoutPage />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

