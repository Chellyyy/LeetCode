/**
 * Create by Chelly
 * 2020/9/9
 */

/**
 * 题目描述
 * 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
 *
 * 注意
 * 所有输入均为小写字母。
 * 不考虑答案输出的顺序。
 */

/**
 * 示例
 * 输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
 * 输出:
 * [
 * ["ate","eat","tea"],
 * ["nat","tan"],
 * ["bat"]
 * ]
 *
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    //利用字符串排序和对象的属性
    let res = {};
    for (let i = 0; i < strs.length; i++) {
        let s = strs[i].split('').sort().join('');
        if (!res[s]) {
            res[s] = [];
        }
        res[s].push(strs[i])
    }
    return Object.values(res);
};