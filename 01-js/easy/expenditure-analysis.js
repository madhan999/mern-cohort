/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let results = []
let categories = {}
transactions.forEach((transaction) => {
    const categoryName = transaction.category;
    if (categories[categoryName]) {
     categories[categoryName] = categories[categoryName] + transaction.price
    } else {
        categories[categoryName] = 0
     categories[categoryName] = categories[categoryName] + transaction.price
    }
 })
let entries = Object.entries(categories)
entries.map( ([key, value]) => {
    const obj = {}
    obj["category"] = key
    obj["totalSpent"] = value
    results.push(obj)
})
console.log(results);
return results
}

module.exports = calculateTotalSpentByCategory;
