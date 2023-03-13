import React, { Component } from 'react';
import "./navMenu.scss"

const menuItems = [
    "Vegetables and Fruits",
    "Dairy and Breakfast",
    "Munchies",
    "Cold Drinks & Juices",
    "Tea, Coffee & Health Drinks",
    "Instant & Frozen Food",
    "Bakery & Biscuits",
    "More"
];

const menuItemList = menuItems.map((item,i) => {
    return (
        <div>
            <li key={item+i}>
                {item}
            </li>
        </div>
    )
})

class NavMenu extends Component {
  

    render() { 
        return (
            <>
                <div className="menu1">
                    <ul className="menu1List">
                        {menuItemList}
                    </ul>
                </div>
            </>

        );
    }
}
 
export default NavMenu;