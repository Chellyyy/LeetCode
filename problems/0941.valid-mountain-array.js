/**
 * Create by Chelly
 * 2020/11/3
 */

/**
 * 题目描述
 * 给定一个整数数组 A，如果它是有效的山脉数组就返回 true，否则返回 false。
 *
 * 让我们回顾一下，如果 A 满足下述条件，那么它是一个山脉数组：
 * A.length >= 3
 * 在 0 < i < A.length - 1 条件下，存在 i 使得：
 * A[0] < A[1] < ... A[i-1] < A[i]
 * A[i] > A[i+1] > ... > A[A.length - 1]
 */

/**
 * 示例1
 * 输入：[2,1]
 * 输出：false
 *
 * 示例2
 * 输入：[3,5,5]
 * 输出：false
 *
 * 示例3
 * 输入：[0,3,2,1]
 * 输出：true
 *
 */


/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
  let n = A.length;
  if(n<3){return false}
  let i = 0;
  while (A[i] < A[i+1]){
    i++
  }
  if (i === 0 || i === n-1) {
    return false
  }
  while (A[i] > A[i+1]){
    i++
  }
  return i===n-1
}