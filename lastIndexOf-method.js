// lastIndexOf method

// lastIndexOf() ek JavaScript method hai jo ek string mein specific substring ya character ka last occurrence dhoondne ke liye istemal hota hai. Ye method string ko peeche se (end se start karke) scan karta hai aur last occurrence ka index return karta hai.

// lastIndexOf() method ek substring ko lekar string ke end se start karke uske occurrences ko check karta hai. Agar substring milta hai toh uska index number return hota hai, warna -1 return hota hai.

const sentence = 'JavaScript is amazing, and JavaScript is powerful';

const index = sentence.lastIndexOf('JavaScript')
console.log(index);