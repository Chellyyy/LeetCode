/**
 * Create by Chelly
 * 2020/9/9
 */

/**
 * 题目描述
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 *
 */

/**
 * 示例
 * 输入：n = 3
 * 输出：[
 * "((()))",
 * "(()())",
 * "(())()",
 * "()(())",
 * "()()()"
 * ]
 *
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    //递归
    let arr = [];
    function generate(s,left,right){
        if(left===n&&right===n){
            arr.push(s);
            return
        }
        if(left<n){
            generate(s+"(",left+1,right);
        }
        if(right<left){
            generate(s+")",left,right+1);
        }
    }
    generate("",0,0);
    return arr;
};