// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

export default function reverseWords(str) {
  if (str === '') {
    return '';
  } else {
    return reverseWords(str.substring(1)) + str.charAt(0);
  }
}

const result = reverseWords('palabra corta');
