/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if (str.length == 1) {
    return true
   }
str = str.toLowerCase()
let newstr = ""
    //remove spaces and special characters in str
    for (let i =0 ; i<str.length; i++) {
        if (str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122) {
            newstr = newstr.concat(str[i])
        }
    }
    let str2 = ""
    for (let i=newstr.length-1; i>=0;i--) {
      let charAscii = newstr.charCodeAt(i)
      if ((charAscii >= 97 && charAscii <=122) || newstr[i]==" ") {
        str2 = str2 + newstr[i]
      }  
    }
    console.log(str2);
    if (newstr == str2 ) {
       return true
    }
    return false
}

module.exports = isPalindrome;
