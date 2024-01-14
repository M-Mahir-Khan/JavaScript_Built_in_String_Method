// fromCharCode Method 

// JavaScript mein ek static method hai jo Unicode values se string create karne ke liye istemal hota hai. Is method mein ek ya multiple Unicode values diye jaate hain aur unhe combine karke ek string banai jaati hai.


let unicodeValue1 = 72;
let unicodeValue2 = 101;
let unicodeValue3 = 108;
let unicodeValue4 = 108;
let unicodeValue5 = 111;

const str = String.fromCharCode(unicodeValue1,unicodeValue2,unicodeValue3,unicodeValue4,unicodeValue5);
console.log(str);// Output : fromCharCode-meth.js:13 Hello