/**
 * Create by Chelly
 * 2020/10/28
 */

/**
 * 题目描述
 * 给你一个整数数组 arr，请你帮忙统计数组中每个数的出现次数。
 * 如果每个数的出现次数都是独一无二的，就返回 true；否则返回 false。
 *
 * 注意
 * 1 <= arr.length <= 1000
 * -1000 <= arr[i] <= 1000
 *
 */

/**
 * 示例1
 * 输入：arr = [1,2,2,1,1,3]
 * 输出：true
 * 解释：在该数组中，1 出现了 3 次，2 出现了 2 次，3 只出现了 1 次。没有两个数的出现次数相同。
 *
 * 示例2
 * 输入：arr = [1,2]
 * 输出：false
 *
 * 示例3
 * 输入：arr = [-3,0,1,-3,1,1,1,-3,10,0]
 * 输出：true
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  let m = new Map();
  for(let item of arr){
    if(m.has(item)){
      let n = m.get(item);
      n++;
      m.set(item, n);
    }else{
      m.set(item, 1);
    }
  }
  let set = new Set(m.values());
  return m.size === set.size
};