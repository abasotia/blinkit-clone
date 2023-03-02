import ProductData from "../../assets/Data/ProductData";


function calculate(cart)
{
    let totalProducts = 0;
    let totalAmount = 0;
    
    for(const key in cart)
    {
        totalProducts += cart[key];
        totalAmount += parseInt(ProductData[key].newPrice)*cart[key];
    }

    return {totalProducts,totalAmount};
    
}

export default calculate;
