/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/


  function calculateTotalSpentByCategory(transactions) {
    let result = {};

  transactions.forEach(transaction => {
    const { category, price } = transaction;

    if (!result.hasOwnProperty(category)) {
      result[category] = 0;
    }

    result[category] += price;
  });

  const output = [];
  const key = Object.keys(result);
  const value = Object.values(result);
  for(let i = 0 ; i < value.length ; i++){
      let obj = {};
      obj.category = key[i]
      obj.totalSpent= value[i];
      output.push(obj);
  }

  return output;
}


module.exports = calculateTotalSpentByCategory;
