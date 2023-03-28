function calculateItems(cart)
{
    let totalProducts = 0;
    
    
    for(const key in cart)
        totalProducts += cart[key];
    

    return totalProducts;
    
}

export default calculateItems;