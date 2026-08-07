const accountId = 144553
let accountEmail = "omnath@gmail.com"
var accountPassword = "12345"
let accountCity = "Wardha"
let accountState = "Maharashtra";

// accountId = 2 // not allowed

accountEmail = "thakur@gmail.com"
accountPassword = "5875645"
accountCity = "Nagpur"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);