/**
 * Create by Chelly
 * 2020/9/9
 */


/**
 * 题目描述
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 */

/**
 * 示例
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 *
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function (nums, target) {
    //两层for循环暴力破解，如果找到则把相应的下标push到数组中
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                arr.push(i, j)
            }
        }
    }
    return arr;
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum2 = function (nums, target) {
    //利用Map存储当前数字和索引，遍历时在map中查找是否存在符合条件的数字，存在即返回
    let arr = new Map();
    for (let i = 0; i < nums.length; i++) {
        let now = target - nums[i];
        if (arr.has(now)) {
            return [arr.get(now), i]
        }
        arr.set(nums[i], i);
    }
};