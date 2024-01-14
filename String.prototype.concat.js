// String.prototype.concat()

// String.prototype.concat() ek JavaScript method hai jo kai strings ko ek saath jodkar ek naya string return karta hai. Yeh method original strings ko modify nahi karta, balki unka combination lekar ek naya string generate karta hai.

// Is method ko use karke aap multiple strings ko concatenate (jod) sakte ho. Yeh flexible hai aur aap kitni bhi strings ko jod sakte ho, jaise:

const str1 = "Hello, ";
const str2 = "how are ";
const str3 = "you?";

const concatenateString = str1.concat(str2,str3)
console.log(concatenateString); // Output: 'Hello, how are you?'