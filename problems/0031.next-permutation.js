/**
 * Create by Chelly
 * 2020/11/10
 */
/**
 * 题目描述
 * 实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。
 * 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
 * 必须原地修改，只允许使用额外常数空间。
 *
 * 注意
 * 1 <= nums.length <= 100
 * 0 <= nums[i] <= 100
 *
 */

/**
 * 示例1
 * 输入：[1,2,3]
 * 输出：[1,3,2]
 *
 * 示例2
 * 输入：[3,2,1]
 * 输出：[1,2,3]
 *
 * 示例3
 * 输入：[1,1,5]
 * 输出：[1,5,1]
 *
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  let i = nums.length - 2;
  // 从右往左遍历拿到第一个左边小于右边的 i,此时 i 右边的数组是从右往左递增的
  while (i >= 0 && nums[i] >= nums[i+1]){
    i--
  }
  if (i >= 0){
    let j = nums.length - 1;
    // 从右往左遍历拿到第一个大于nums[i]的数,因为之前nums[i]是第一个小于他右边的数，所以他的右边一定有大于他的数
    while (j >= 0 && nums[j] <= nums[i]){
      j--
    }
    // 交换两个数
    [nums[j], nums[i]] = [nums[i], nums[j]]
  }
  // 对 i 右边的数进行交换
  // 因为 i 右边的数原来是从右往左递增的，把一个较小的值交换过来之后，仍然维持单调递增特性
  // 此时头尾交换并向中间逼近就能获得 i 右边序列的最小值
  let l = i + 1;
  let r = nums.length - 1;
  while (l < r){
    [nums[l], nums[r]] = [nums[r], nums[l]]
    l++
    r--
  }
}