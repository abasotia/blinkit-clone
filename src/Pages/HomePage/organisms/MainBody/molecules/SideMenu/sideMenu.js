import React, { PureComponent } from 'react';

import "./sideMenu.scss"

import { SIDE_MENU_INFO } from './SideMenuData';

class SideMenu extends PureComponent {
  
    constructor(props)
    {
        super(props)
        this.sideMenu = []
        this.state = {
            selected : "Fresh Vegetables"
        }
    }
    handleClick(item)
    {
        this.setState({selected : item})
    }

    returnSideMenuItem(item,className)
    {
        return(
            <div onClick={()=> this.handleClick(item)} className={className} >
                <div className="sideImgContainer">
                    <img src={SIDE_MENU_INFO[item]}></img>
                </div>
                <div className="label">{item}</div>

            </div>
        )
    }

    render() { 
        console.log("THIS IS THE SIDE MENU")
        this.sideMenu = [];
        for(let key in SIDE_MENU_INFO)
        {
            if(this.state.selected == key)
               this.sideMenu.push(this.returnSideMenuItem(key,"selectedSideMenuItem "+"sideMenuItemContainer"));
            else
              this.sideMenu.push(this.returnSideMenuItem(key,"sideMenuItemContainer"));
        }
        return (
            <div className='sideMenu'>
                {this.sideMenu}
            </div>

        );
    }
}
 
export default SideMenu;
