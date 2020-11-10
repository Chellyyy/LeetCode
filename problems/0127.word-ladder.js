/**
 * 题目描述
 * 给定两个单词（beginWord 和 endWord）和一个字典，找到从 beginWord 到 endWord 的最短转换序列的长度。转换需遵循如下规则.
 *每次转换只能改变一个字母。
 * 转换过程中的中间单词必须是字典中的单词。
 *
 * 注意
 * 如果不存在这样的转换序列，返回 0。
 * 所有单词具有相同的长度。
 * 所有单词只由小写字母组成。
 * 字典中不存在重复的单词。
 * 你可以假设 beginWord 和 endWord 是非空的，且二者不相同。
 */


/**
 * 示例1
 * 输入:
 beginWord = "hit",
 endWord = "cog",
 wordList = ["hot","dot","dog","lot","log","cog"]

 输出: 5

 解释: 一个最短转换序列是 "hit" -> "hot" -> "dot" -> "dog" -> "cog",
 返回它的长度 5。
 *
 * 示例2
 * 输入: [4,1,2,1,2]
 * 输出: 4
 */

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if(!wordSet.has(endWord)){
        return 0
    }
    const queue = [[beginWord,1]]
    while(queue.length){
        let [word,level] = queue.shift();
        if(word===endWord){
            return level
        }
        for(let i = 0;i<word.length;i++){
            for (let j = 97; j <= 122; j++) {
                let newWord = word.slice(0,i) + String.fromCharCode(j) + word.slice(i+1);
                if(wordSet.has(newWord)){
                    queue.push([newWord,level+1])
                    wordSet.delete(newWord)
                }
            }
        }
    }
    return 0
};
