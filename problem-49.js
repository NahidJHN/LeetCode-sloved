// // Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// // An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// // Example 1:

// // Input: strs = ["eat","tea","tan","ate","nat","bat"]
// // Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// // Example 2:

// // Input: strs = [""]
// // Output: [[""]]
// // Example 3:

// // Input: strs = ["a"]
// // Output: [["a"]]

// // Constraints:

// // 1 <= strs.length <= 104
// // 0 <= strs[i].length <= 100
// // strs[i] consists of lowercase English letters.

// // /**
// //  * @param {string[]} strs
// //  * @return {string[][]}
// //  */
// // var groupAnagrams = function (strs) {
// //   if (strs.length === 0) return [[""]];
// //   const result = [];
// //   var isAnagram = function (s, t) {
// //     const sMap = new Map();
// //     if (s.length !== t.length) return false;

// //     for (let i = 0; i < s.length; i++) {
// //       if (!sMap.has(s[i])) {
// //         const sWordCount = s.split(s[i]).length - 1;
// //         const tWordCount = t.split(s[i]).length - 1;
// //         sMap.set(s[i], "done");
// //         if (sWordCount !== tWordCount) return false;
// //       }
// //     }
// //     return true;
// //   };

// //   for (let i = 0; i < strs.length; i++) {
// //     const element = strs[i];
// //     const anagrams = [element];
// //     for (let j = 0; j < strs.length; j++) {
// //       if (i === j) continue;
// //       if (isAnagram(element, strs[j])) anagrams.push(strs[j]);
// //     }
// //     result.push(anagrams);
// //   }
// //   return result;
// // };

// // console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  if (strs.length === 0) return [[""]];
  const map = new Map();

  for (let i = 0; i < strs.length; i++) {
    map.set(strs[i].split("").sort().join(""), []);
  }

  for (let i = 0; i < strs.length; i++) {
    const sortedStr = strs[i].split("").sort().join("");
    if (map.has(sortedStr)) {
      map.set(sortedStr, [...map.get(sortedStr), strs[i]]);
    }
  }
  return [...map.values()];
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
