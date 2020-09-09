/**
 * Create by Chelly
 * 2020/9/9
 */

/**
 * 题目描述
 * 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
 *
 */

/**
 * 示例
 * 输入: n = 4, k = 2
 * 输出:
 * [
 * [2,4],
 * [3,4],
 * [2,3],
 * [1,2],
 * [1,3],
 * [1,4],
 * ]
 *
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    // 递归
    let arr = [];
    function getCombine(i, nowArr) {
        if (nowArr.length === k) {
            arr.push(nowArr);
            return
        }
        while (i < n) {
            getCombine(++i, nowArr.concat([i]))
        }
    }

    getCombine(0, []);
    return arr;
};