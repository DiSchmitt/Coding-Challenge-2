function tippercentage(bill) {
    return bill > 300 || bill < 50 ? '15%' : '20%'
}
var tip
tip = tippercentage(300)
console.log(tip)