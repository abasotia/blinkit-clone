class NavMenu {

    constructor(){
       this.menu1 = document.createElement("div");
       this.ulMenu = document.createElement("ul");
       this.menuItems = [
        "Vegetables and Fruits",
        "Dairy and Breakfast",
        "Munchies",
        "Cold Drinks & Juices",
        "Tea, Coffee & Health Drinks",
        "Instant & Frozen Food",
        "Bakery & Biscuits",
        "More"
    ];
    }

    blinkitUnorderedList()
    {
        this.ulMenu.className = "menu-1-list";
        return this.ulMenu;
    }
    
    blinkitMenuList()
    {
        this.menu1.className = "menu-1";
        let parentList = this.blinkitUnorderedList();
        let n = this.menuItems.length;
        for(let i=0; i<n; i++)
        {
            this.ulMenu.innerHTML += `<div>
             <li>${this.menuItems[i]}</li>
            </div>`
            
        }
        this.menu1.appendChild(parentList);
        return this.menu1;
    }
}