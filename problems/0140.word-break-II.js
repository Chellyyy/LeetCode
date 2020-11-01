/**
 * 题目描述
 * 给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，在字符串中增加空格来构建一个句子，使得句子中所有的单词都在词典中。
 * 返回所有这些可能的句子。
 *
 * 注意
 * 分隔时可以重复使用字典中的单词。
 * 你可以假设字典中没有重复的单词。
 *
 */

/**
 * 示例1
 * 输入:
 * s = "catsanddog"
 * wordDict = ["cat", "cats", "and", "sand", "dog"]
 * 输出:
 * [
 *   "cats and dog",
 *   "cat sand dog"
 * ]
 *
 * 示例2
 * 输入:
 * s = "pineapplepenapple"
 * wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
 * 输出:
 * [
 *   "pine apple pen apple",
 *   "pineapple pen apple",
 *   "pine applepen apple"
 * ]
 * 解释: 注意你可以重复使用字典中的单词。
 *
 * 示例3
 * 输入:
 * s = "catsandog"
 * wordDict = ["cats", "dog", "sand", "and", "cat"]
 * 输出:
 * []
 *
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    let n = s.length;
    let dict = new Set(wordDict);
    let memo = new Array(n);
    function dfs(start) {
        if(memo[start]){
            return memo[start]
        }
        if (start > n - 1) {
            return [[]]
        }
        let res = [];
        for (let i = start + 1; i<=n; i++) {
            let word = s.slice(start, i);
            if(dict.has(word)){
                restRes = dfs(i);
                for(let item of restRes){
                    res.push([word].concat(item))
                }
            }
        }
        memo[start] = res;
        return res;
    }
    return dfs(0).map(words => {
        return words.join(' ')
    })
};
