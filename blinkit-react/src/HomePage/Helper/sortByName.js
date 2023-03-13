function sortByName(sortContainer)
{
    console.log("Hello")
    sortContainer.sort((x,y) => (x.productName.localeCompare(y.productName)));
    console.log(sortContainer);
}

export default sortByName;