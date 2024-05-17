function calcTipPercentage(bill) {
    return bill > 300 || bill < 50 ? .15 : .2
}
function calcTipAmount(bill , tippercentage) {
    return bill * tippercentage
}
var bill = 200
var tip = calcTipAmount(bill , calcTipPercentage(bill))
var total = bill + tip
console.log('The bill was: $'+bill) 
console.log('The tip was: $'+tip)
console.log('And the total value: $' +total) 