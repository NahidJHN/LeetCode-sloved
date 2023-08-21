// 5. Longest Palindromic Substring
// Given a string s, return the longest
// palindromic

// substring
//  in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

// const longestPalindrome = (s) => {
//   let longest = "";
//   for (let i = 0; i < s.length; i++) {
//     for (let j = i; j <= s.length; j++) {
//       const getSlice = s.substring(i, j + 1);
//       let reversedString = getSlice.split("").reverse().join("");
//       if (getSlice === reversedString && longest.length < getSlice.length) {
//         longest = getSlice;
//       }
//     }
//   }
//   return longest;
// };

const longestPalindrome = (s) => {
  let longest = "";
  for (let i = 0; i < s.length; i++) {
    const getSlice = s.substring(i, j + 1);
    let reversedString = getSlice.split("").reverse().join("");
    if (getSlice === reversedString && longest.length < getSlice.length) {
      longest = getSlice;
    }
  }
  return longest;
};
// case
//a, ac, abb, abcdbbfcba,

console.log(longestPalindrome("10"));
