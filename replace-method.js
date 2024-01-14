// replace method

// replace() ek JavaScript method hai jo ek string mein specific substring ya pattern ko dhoondkar usse replace karne ke liye istemal hota hai. Ye method string mein diye gaye pattern ko dhundkar usse naye values se replace karta hai.

// replace() method ek substring ya regular expression ko lekar string ko scan karta hai. Jab pattern match hota hai toh usse di gayi new value se replace kar deta hai. Agar multiple matches hote hain aur global flag (g) istemal kiya gaya hai toh sabhi matches ko replace karta hai, warna pehle milne wala match hi replace hota hai.

// 1)
const str = "JavaScript is a greate language";

const newSentence = str.replace("JavaScript","PHP");
console.log(newSentence); // Output  PHP is a greate language

// 20
const sentence = 'JavaScript is fun, JavaScript is powerful';
const oldSubstring = /JavaScript/g;
const newSubstring = "jS"

const newSentence2 = sentence.replace(oldSubstring,newSubstring)
console.log(newSentence2);