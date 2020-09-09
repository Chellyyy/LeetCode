/**
 * Create by Chelly
 * 2020/9/9
 */

/**
 * 题目描述
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 *
 */

/**
 * 示例1
 * 输入: "abcabcbb"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 *
 * 示例2
 * 输入: "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 *
 * 示例3
 * 输入: "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 *
 *
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring1 = function (s) {
    //从字符串第0位开始获取每个字符串不重复的子串，求出最大值
    let temp = [];
    function getLength(s1) {
        let arr = [];
        for (let i = 0; i < s1.length; i++) {
            if (arr.indexOf(s1[i]) === -1) {
                arr.push(s1[i])
            } else {
                break;
            }
        }
        return arr.length;
    }

    for (let i = 0; i < s.length; i++) {
        temp.push(getLength(s.slice(i)))
    }
    temp = temp.sort(function (a, b) {
        return b - a
    });
    return temp.length ? temp[0] : 0;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring2 = function(s) {
    // 利用滑动窗口，如果字符串重复，则移动到下一位继续比较，用max记录最大值
    let i =0;
    let arr = [];
    let tempArr = "";
    let max = 0;
    while(i<s.length){
        let index = arr.indexOf(s[i]);
        if(index>=0){
            if(arr.length>max){
                tempArr = arr.join("");
                max = arr.length;
            }
            arr = arr.slice(index+1);
        }
        arr.push(s[i]);
        i++;
    }
    return tempArr.length>arr.length ? tempArr.length : arr.length;
};