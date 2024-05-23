// Dawson Schmitt - U4888-2664
//This first function is the ternary operator and determines whether the bill requires a 15% or 20% tip.
function calcTipPercentage(bill) { 
    return bill > 300 || bill < 50 ? .15 : .2
}
// This second function multiplies the tip percentage by the bill and returns the value of the tip that should be given
function calcTip(bill) {
    return calcTipPercentage(bill) * bill
}
let bill = 100
let tip = calcTip(bill)
let total = bill + tip
console.log('The bill was: $'+bill) 
console.log('The tip was: $'+tip)
console.log('And the total value: $'+total) 
let bills = [275 , 40 , 430 , 125 , 555 , 44]
let tips = []
//This 'For' statement takes values from the list in the bills array and one at a time puts each number into the calcTip function. The results are then pushed into the tips array. 
for  (const x of bills) {
    tips.push(calcTip(x))
}
let totals = []
//This 'For' statement assigns each corresponding value in the bills and tips arrays an index number. It adds the two numbers with the same index number and pushes the result into the totals array.
bills.forEach((samplebill, index) => {
    const sampletip = tips[index];
    totals.push(samplebill+sampletip)
});
    console.log(totals)