//String.prototype.includes()

// String.prototype.includes() ek JavaScript method hai jo ek string mein kisi dusri substring ka presence check karta hai. Yeh method boolean value return karta hai jo indicate karta hai ki substring string mein maujood hai ya nahi.

// Is method ka use aksar specific substring ko dhundhne ya uske presence ko validate karne ke liye hota hai. Yadi substring string mein maujood hai toh true return hota hai, warna false.

//1)
const str = "Hello, how are you" 
const checkIncludes = str.includes("how")

console.log(checkIncludes); // Output: true

//2)
const sentence = "The quick brown fox jumps over a lazy dog.";
const word  = "fox";

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
//  output: "The word "fox" is in the sentence"