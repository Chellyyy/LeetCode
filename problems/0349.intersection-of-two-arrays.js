/**
 * Create by Chelly
 * 2020/11/2
 */


/**
 * 题目描述
 * 给定两个数组，编写一个函数来计算它们的交集。
 *
 */

/**
 * 示例1
 * 输入：nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出：[2]
 *
 * 示例2
 * 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出：[9,4]
 *
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  set1.size > set2.size ? [set1, set2] = [set2, set1] : ""
  let arr = [];
  for (let item of set1) {
    if(set2.has(item)){
      arr.push(item)
    }
  }
  return arr
};