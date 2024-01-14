// String.prototype.charAt()

// String.prototype.charAt() ek JavaScript method hai jo ek string mein specific index par sthit character ko return karta hai. Is method ka istemal kisi bhi string ke character ko access karne ke liye hota hai.

// Yeh method index number pass karke string ke us position par sthit character ko retrieve karta hai. Jaise:

//1)
const str = "Hello"
console.log(str.charAt(1)); //output : e

//2
const sentence = "Meri language me javascript";
const position = 6;

const characters = sentence.charAt(position);
console.log(`Position ${position} par character: ${characters}`);  //Output : Position 6 par character: a