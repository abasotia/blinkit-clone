function sortByDiscountHighLow(sortContainer)
{
    sortContainer.sort((x,y) => ((y.originalPrice - y.newPrice)/y.originalPrice - (x.originalPrice - x.newPrice)/x.originalPrice))
}

export default sortByDiscountHighLow