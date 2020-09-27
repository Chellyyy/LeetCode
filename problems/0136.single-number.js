/**
 * Create by Chelly
 * 2020/9/27
 */

/**
 * 题目描述
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 *
 * 注意
 * 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 *
 */

/**
 * 示例1
 * 输入: [2,2,1]
 * 输出: 1
 *
 * 示例2
 * 输入: [4,1,2,1,2]
 * 输出: 4
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber1 = function(nums) {
    for(let item of nums){
        if(nums.indexOf(item)===nums.lastIndexOf(item)){
            return item
        }
    }
};
//异或也太骚了
// a^a=0
// a^0=a
// a^b^a = a^a^b
var singleNumber2 = function(nums) {
    return nums.reduce(function(a,b){return a^b})
};