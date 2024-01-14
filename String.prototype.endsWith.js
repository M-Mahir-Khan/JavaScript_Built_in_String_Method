//String.prototype.endsWith Method

// String.prototype.endsWith() ek JavaScript method hai jo check karta hai ki ek string kisi specific substring se end hoti hai ya nahi. Yeh method boolean value return karta hai jo batata hai ki string substring se end hoti hai ya nahi.

// Is method ka use aksar string ke specific portion ko check karne mein kiya jaata hai. Yeh method substring ko end mein check karke true ya false return karta hai.

const str = "Hello, how are you?"
const checkEnd = str.endsWith('you?')

console.log(checkEnd); // Output: true