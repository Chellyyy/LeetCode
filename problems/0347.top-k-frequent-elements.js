/**
 * Create by Chelly
 * 2020/9/9
 */

/**
 * 题目描述
 * 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。
 *
 * 注意
 * 你可以假设给定的 k 总是合理的，且 1 ≤ k ≤ 数组中不相同的元素的个数。
 * 你的算法的时间复杂度必须优于 O(n log n) , n 是数组的大小。
 * 题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的。
 * 你可以按任意顺序返回答案。
 *
 */

/**
 * 示例1
 * 输入: nums = [1,1,1,2,2,3], k = 2
 * 输出: [1,2]
 *
 * 示例2
 * 输入: nums = [1], k = 1
 * 输出: [1]
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent1 = function (nums, k) {
    // 用map记录数组出现的次数
    let map = new Map();
    let l = nums.length;
    for (let i = 0; i < l; i++) {
        let item = nums[i];
        if (map.has(item)) {
            let v = map.get(item) + 1;
            map.set(item, v)
        } else {
            map.set(item, 1)
        }
    }
    //排序
    let arrayObj = Array.from(map);
    arrayObj.sort(function (a, b) {
        return b[1] - a[1]
    });
    return arrayObj.slice(0, k).map(item => {
        return item[0]
    })
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent2 = function (nums, k) {
    let map = new Map();
    let l = nums.length;
    for (let i = 0; i < l; i++) {
        let item = nums[i];
        if (map.has(item)) {
            let v = map.get(item) + 1;
            map.set(item, v)
        } else {
            map.set(item, 1)
        }
    }
    return sort(map);

    function sort(map) {
        //优化排序，把个数相同的数字放到一个数组中
        let arr = [], result = [];
        map.forEach((value, key) => {
            if (!arr[value]) {
                arr[value] = [key]
            } else {
                arr[value].push(key)
            }
        });
        let l = arr.length;
        for (let i = l - 1; i >= 0 && result.length < k; i--) {
            if (arr[i]) {
                result.push(...arr[i]);
            }
        }
        return result
    }
};