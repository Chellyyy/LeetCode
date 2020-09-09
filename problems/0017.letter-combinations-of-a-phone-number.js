/**
 * Create by Chelly
 * 2020/9/9
 */


/**
 * 题目描述
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 *
 * 注意
 * 尽管答案是按字典序排列的，但是你可以任意选择答案输出的顺序。
 */

/**
 * 示例
 * 输入："23"
 * 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 *
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    //递归
    let hashMap = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    };
    let arr = [];
    if (digits.length) {
        function getStr(str, index) {
            let s = hashMap[digits[index]];
            let sL = s.length;
            for (let i = 0; i < sL; i++) {
                let str1 = str + s[i];
                if (str1.length === digits.length) {
                    arr.push(str1);
                } else {
                    getStr(str1, index + 1)
                }
            }
        }
        getStr("", 0)
    }
    return arr;
};