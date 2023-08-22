// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const sMap = new Map();
  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    if (!sMap.has(s[i])) {
      const sWordCount = s.split(s[i]).length - 1;
      const tWordCount = t.split(s[i]).length - 1;
      sMap.set(s[i], "done");
      if (sWordCount !== tWordCount) return false;
    }
  }
  return true;
};
