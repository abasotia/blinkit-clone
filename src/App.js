import React, { Component } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from "./Pages/HomePage";
import Checkout from "./Pages/CheckoutPage"

class App extends Component {
    constructor(props)
    {
        super(props)
        this.state = {

        }
    }
    render ()
    {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
            </BrowserRouter>
        );
    }
    
}
  
  export default App;