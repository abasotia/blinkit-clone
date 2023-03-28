import React, { Component } from 'react';
import "./loginBtn.css"
class LoginBtn extends Component {
    render() { 
        console.log("Login Btn is renedered");
        return (
            <div id="Login">
                <a href="#">Login</a>
            </div>
        );
    }
}
 
export default LoginBtn;