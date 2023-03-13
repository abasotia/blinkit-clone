function sortByDiscountLowHigh(sortContainer)
{
    sortContainer.sort((x,y) => ((x.originalPrice - x.newPrice)/x.originalPrice - (y.originalPrice - y.newPrice)/y.originalPrice))
}

export default sortByDiscountLowHigh