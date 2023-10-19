function palindrome(str) {
    let regEx = /[a-z0-9]+/gi;
    let filteredStr = str.match(regEx).join('').toLowerCase();
    let reversedStr = '';
    for(let i=filteredStr.length - 1; i>=0; i--){
      reversedStr += filteredStr[i];
    }
    
    return reversedStr === filteredStr;
  }
  
  console.log(palindrome("_eye"));