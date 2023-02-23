class SideBar{
    constructor()
    {
        this.sideMenu = document.createElement("div");
        this.sideImg = [
            "images/FreshVegetables.jpeg",
            "images/FreshFruits.jpeg",
            "images/saladBar.jpeg",
            "images/exotics.jpeg",
            "images/Flowers&leaves.jpeg",
            "images/FreshlyCutFruits&Sprouts.jpeg",
            "images/Leafies&Herbs.png"
        ];
        this.sideLabel = [
            "Fresh Vegetables",
            "Fresh Fruits",
            "Salad Bar",
            "Exotics",
            "Flowers & Leaves",
            "Freshly Cut & Sprouts",
            "Leafies & Herbs"
        ]
    }

    blinkitSideMenu() {
        this.sideMenu.className = "side-menu";
        let n = this.sideImg.length;
        for(let i=0; i<n; i++)
        {
            this.sideMenu.innerHTML += `<div>
                <div><img src=${this.sideImg[i]}></div>
                <div class="label">${this.sideLabel[i]}</div>
            </div>`
        }
        return this.sideMenu;
    }
}