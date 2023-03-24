import React, { PureComponent } from 'react';
import "./subHeader.scss"
import { MENU_ITEMS } from '../../assets/Data/MenuItems';



// const menuItemList = MENU_ITEMS.map((item,i) => {
//     return (
//         <div>
//             <li key={item+i}>
//                 {item}
//             </li>
//         </div>
//     )
// })

class SubHeader extends PureComponent {


    constructor(props)
    {
        super(props)
         this.menuItemListCaller = this.menuItemList()
    }
    menuItemList()
    {
        return ( MENU_ITEMS.map((item,i) => {
            return (
                <div>
                    <li key={item+i}>
                        {item}
                    </li>
                </div>
            )
        }))
    }

    render() { 
        console.log("subheader re-rendered");
        return (
            <>
                <div className="menu1">
                    <ul className="menu1List">
                       {this.menuItemListCaller} 
                    </ul>
                </div>
            </>

        );
    }
}
 
export default SubHeader;