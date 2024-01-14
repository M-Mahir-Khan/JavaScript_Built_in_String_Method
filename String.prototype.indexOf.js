//String.prototype.indexOf

// dhundhne ke liye use hota hai. Ye method substring ka index return karta hai, ya fir -1 agar substring string mein nahi hai.

// Is method ka use specific substring ke position ko find karne ke liye kiya jata hai. Yadi substring string mein maujood hai, toh uska index return hota hai, warna -1 return hota hai.

//1)
const str = "Hello, how are you?"
const index = str.indexOf("how")

console.log(index); //Output : 7

//2)
const sentence = "This a wonderful day!";
const index1 = sentence.indexOf("is")

console.log(index1); //Output : 2