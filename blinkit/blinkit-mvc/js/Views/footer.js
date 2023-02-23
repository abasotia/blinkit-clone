class Footer
{
    constructor()
    {
        this.footerSection = document.createElement("div");
        this.footerText = document.createElement("div");
        this.footerSocial = document.createElement("div");

        this.servicesData = [
            "../../images/10_minute_delivery.png",
            "../../images/Best_Prices_Offers.png",
            "../../images/Wide_Assortment.png"
        ]
        this.text1 = [
            "Superfast Delivery",
            "Best Prices & Offers",
            "Wide Assortment"
        ]
        
        this.text2 = [
            "Get your orders delivered at your doorstep at the earliest from dark stores near you",
            "Best price destination with offers directly from the manufacturers",
            "Choose from 5000+ products across food personal care household & other categories"
        ]
    }
    
    blinkitCreateFooter()
    {
        this.footerSection.className = "footerSection";
        this.footerText.className = "footerText";
        for(let i=0; i<3; i++)
        {
            this.footerSection.append(this.blinkitCreateServices(i));
        }

        this.footerText.innerHTML = `"Blinkit" is owned & managed by "Blinkit Commerce Private Limited" (formerly known as Grofers India Private Limited) and is not
        related, linked or interconnected in whatsoever manner or nature to "GROFER.COM" which is a real estate services business operated by "Redstone Consultancy Services Private Limited" `;

        this.blinkitFooterItems();

        return [this.footerSection, this.footerText, this.footerSocial];
    }

    blinkitFooterItems()
    {
        let f1 = document.createElement("div");
        let f2 = document.createElement("div");
        let f3 = document.createElement("div");
        
        f1.className = "footerItems"
        f2.className = "footerItems"
        f3.className = "footerItems"
        
        f1.innerHTML = ` &copy Blinkit Commerce Private Limited (formerly known as Grofers India Privated Limited), 2016-2023`;
        f2.innerHTML =  `<p>DownLoad App</p>
        <img class="downloads" src="https://blinkit.com/d61019073b700ca49d22.png">
        <img class="downloads" src="https://blinkit.com/8ed033800ea38f24c4f0.png">`
        f3.innerHTML = `<img class="socials" src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Instagram_svg-256.png">
        <img class="socials" src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Facebook_svg-1024.png">
        <img class="socials" src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Twitter_svg-256.png">
        <img class="socials" src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Linkedin_svg-1024.png">`

        this.footerSocial.className = "footerSocial";
        this.footerSocial.appendChild(f1);
        this.footerSocial.appendChild(f2);
        this.footerSocial.appendChild(f3);
    }
    blinkitCreateServices(iter)
    {
        let services = document.createElement("div");
        services.className = "services";
        services.innerHTML = `<img src=${this.servicesData[iter]}>`;
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        p1.innerHTML = this.text1[iter];
        p2.innerHTML = this.text2[iter];
        services.appendChild(p1);
        services.appendChild(p2);
        
        return services;

    }

}