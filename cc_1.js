function calcTipPercentage(bill) {
    return bill > 300 || bill < 50 ? .15 : .2
}
function calcTip(bill) {
    return calcTipPercentage(bill) * bill
}
var bill = 100
var calculateTip = calcTip(bill)
var total = bill + calcTip(bill)
console.log('The bill was: $'+bill) 
console.log('The tip was: $'+calcTip(bill))
console.log('And the total value: $' +total) 