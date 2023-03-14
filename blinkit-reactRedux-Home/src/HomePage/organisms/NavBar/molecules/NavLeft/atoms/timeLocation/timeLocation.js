import React from "react";
import { Component } from "react";
import "./timeLocation.scss";



class TimeLocation extends Component {
    render()
    {
        return(
            <div  className="timeLoc">
                <div className="delTime">
                    Delivery in 8 minutes
                </div>
                <div className="delLocation">
                    12 Chinmaya Hospital...
                </div>
            </div>
        );
    }
}

export default TimeLocation