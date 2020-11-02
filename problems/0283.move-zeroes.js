/**
 * Create by Chelly
 * 2020/10/29
 */

/**
 * 题目描述
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 *
 * 注意
 * 你可以假设字符串只包含小写字母。
 *
 * 进阶:
 * 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
 */

/**
 * 示例1
 * 输入: s = "anagram", t = "nagaram"
 * 输出: true
 *
 * 示例2
 * 输入: s = "rat", t = "car"
 * 输出: false
 *
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let j = 0, n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i];
      if (i !==j ){
        nums[i] = 0
      }
      j++
    }
  }
}