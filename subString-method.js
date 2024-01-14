// subString method 


// substring ek JavaScript string method hai jo ek substring return karta hai jo original string se extract ki gayi hoti hai. Is method ka use kisi bhi string ke specified indices ke beech ka portion extract karne ke liye hota hai.

// Yeh method do parameters leta hai:

// Start index: Yeh parameter woh index hai jahan se substring extract karna shuru karna hai. Yeh compulsory hai.
// End index: Yeh parameter woh index hai jahan tak substring extract karna hai. Yeh bhi compulsory hai.
// substring method, start index se lekar end index se pehle ke characters ko ek naya string mein extract karta hai. Yeh method negative indices ko handle karta hai; agar end index start index se chhota hai toh dono indices swap ho jaate hain.

const str = "Hello, how are you?"
const extractString = str.substring(7,11)
console.log(extractString); // output : how