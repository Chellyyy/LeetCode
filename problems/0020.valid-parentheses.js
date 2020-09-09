/**
 * Create by Chelly
 * 2020/9/9
 */
/**
 * 题目描述
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 有效字符串需满足：
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 *
 * 注意
 * 空字符串可被认为是有效字符串。
 *
 */

/**
 * 示例1
 * 输入: "()"
 * 输出: true
 *
 * 示例2
 * 输入: "([)]"
 * 输出: false
 *
 * 示例3
 * 输入: "{[]}"
 * 输出: true
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    //模仿栈，遇到左则入栈，遇到右且匹配到上一个为左则出栈
    let temp = [];
    for(let i of s){
        if(i==="("||i==="["||i==="{"){
            temp.push(i);
            continue
        }
        if(i===")"&&temp.length&&temp[temp.length-1]==="("){
            temp.pop();
            continue
        }
        if(i==="]"&&temp.length&&temp[temp.length-1]==="["){
            temp.pop();
            continue
        }
        if(i==="}"&&temp.length&&temp[temp.length-1]==="{"){
            temp.pop();
            continue
        }
        temp.push(i)
    }
    return temp.length === 0
};