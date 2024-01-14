// match() ek JavaScript method hai jo string mein ek ya multiple matches dhoondne ke liye istemal hota hai. Ye method regular expressions ke sath use hota hai aur string mein matches milte hain toh unhe ek array mein return karta hai.

// match() method ek pattern ko lekar string ke andar search karta hai aur milne wale matches ko ek array mein laata hai. Agar koi match na mile toh null return hota hai.

const sentence = "Javascript is a great is language";
const matches = sentence.match(/is/g)
console.log(matches); // output : ['is', 'is']