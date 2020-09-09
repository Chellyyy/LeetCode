/**
 * Create by Chelly
 * 2020/9/9
 */

/**
 * 题目描述
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 *
 * 注意
 * 你可以假设字符串只包含小写字母。
 *
 * 进阶:
 * 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
 */

/**
 * 示例1
 * 输入: s = "anagram", t = "nagaram"
 * 输出: true
 *
 * 示例2
 * 输入: s = "rat", t = "car"
 * 输出: false
 *
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    //字符串
    return s.split("").sort().join("") === t.split("").sort().join("")
};