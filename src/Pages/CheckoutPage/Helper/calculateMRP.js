import ProductData from "../../../assets/Data/ProductData";

function calculateMRP(cart)
{
   let amount = 0;
   for(const key in cart)
    {
        let price = parseInt(ProductData[key].originalPrice);
        let items = parseInt(cart[key]);
        amount += price*items;
    }

    return amount;
     
}

export default calculateMRP;