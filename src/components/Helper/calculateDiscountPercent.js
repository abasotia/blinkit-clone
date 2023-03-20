function calculateDiscountPercentage(newPrice, originalPrice)
{
    newPrice = parseInt(newPrice);
    originalPrice = parseInt(originalPrice);
    return parseInt((originalPrice - newPrice )/originalPrice*100);
}

export default calculateDiscountPercentage;