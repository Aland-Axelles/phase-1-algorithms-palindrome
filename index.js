function isPalindrome(word) {
 
    const length = word.length;
    for (let i = 0; i < length / 2; i++) {
      if (word[i] !== word[length - 1 - i]) {
        return false;
      }
    }
    return true;
  
  
 
  
  
}




if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;