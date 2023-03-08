import ProductData from "../../assets/Data/ProductData";

function calculateAmount(cart)
{
   let amount = 0;
   for(const key in cart)
    {
        let price = parseInt(ProductData[key].newPrice);
        let items = parseInt(cart[key]);
        amount += price*items;
    }

    return amount;
     
}

export default calculateAmount;
