// 4. Median of Two Sorted Arrays
// Hard
// 21.9K
// 2.5K
// Companies
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
  const sortedArr = [...nums1, ...nums2].sort((a, b) => a - b);
  const isOdd = sortedArr.length % 2 === 1;
  const mid = sortedArr.length / 2;
  if (isOdd) return sortedArr[Math.floor(mid)];
  return (sortedArr[mid] + sortedArr[mid - 1]) / 2;
};

console.log(findMedianSortedArrays([1, 2], [3, 4]));
