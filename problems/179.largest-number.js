/**
 * 题目描述
 * 给定一组非负整数 nums，重新排列每个数的顺序（每个数不可拆分）使之组成一个最大的整数。
 * 注意：输出结果可能非常大，所以你需要返回一个字符串而不是整数。
 */

/**
 * 示例1
 * 输入：nums = [10,2]
 * 输出："210"
 *
 * 示例2
 * 输入：nums = [3,30,34,5,9]
 * 输出："9534330"
 *
 * 示例3
 * 输入：nums = [1]
 * 输出："1"
 *
 * 示例4
 * 输入：nums = [10]
 * 输出："10"
 */

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  nums = nums.sort((a, b) => {
    return b + "" + a - (a + "" + b);
  });
  if (nums[0] === 0) {
    return "0";
  }
  return nums.join("");
};
