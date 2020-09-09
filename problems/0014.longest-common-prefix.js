/**
 * Create by Chelly
 * 2020/9/9
 */

/**
 * 题目描述
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 *
 */

/**
 * 示例1
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 *
 * 示例2
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 *
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    // 利用every函数判断这个前缀是不是在所有数组中
    let tempS = strs.shift();
    let s = "";
    if (tempS) {
        for (let i = 0; i < tempS.length; i++) {
            s += tempS[i];
            if (!strs.every(item => {
                return item.indexOf(s) === 0
            })) {
                s = s.substr(0, s.length - 1);
                break;
            }
        }
    }
    return s;
};