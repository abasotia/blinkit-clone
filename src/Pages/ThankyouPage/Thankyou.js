import React, { Component } from 'react';

import NavBar from  "../../molecules/NavBar/navBar";
import SubHeader from "../../molecules/SubHeader/subHeader";
import Footer from "../../molecules/Footer/footer"
import ThankyouImg from "./Images/groceries.svg"

import "./styles.scss"

class Thankyou extends Component {
    render(){
        return (
            <>
                <NavBar />
                <SubHeader />
                <div className="thankyouContainer">
                    <img className="thankYouImg" src={ThankyouImg}/>
                    <div className="thankyouText">Thank you for Shopping</div>
                </div>
                <Footer />
               
            </>
        )
    }
}

export default Thankyou