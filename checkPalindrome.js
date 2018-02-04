/*
A simple algorithm that checks whether a given sampleString is a palindrome.
https://en.wikipedia.org/wiki/Palindrome

Special thanks to Dylan C. Israel for influencing this code!

*/
function checkPalindrome (sampleString) {
  if (typeof sampleString !== 'string') {
    window.alert("Please enter a string value.");
  }

  else if(sampleString === sampleString.split("").reverse().join("")) {
    return true;
  }

  else {
    return false;
  }
}

checkPalindrome('a');
