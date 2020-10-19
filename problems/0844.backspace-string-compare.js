/**
 * Create by Chelly
 * 2020/10/19
 */

/**
 * 题目描述
 * 给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 # 代表退格字符。
 *
 * 注意
 * 如果对空文本输入退格字符，文本继续为空。
 * 1 <= S.length <= 200
 * 1 <= T.length <= 200
 * S 和 T 只含有小写字母以及字符 '#'。
 *
 */

/**
 * 示例1
 * 输入：S = "ab#c", T = "ad#c"
 * 输出：true
 * 解释：S 和 T 都会变成 “ac”。
 *
 * 示例2
 * 输入：S = "ab##", T = "c#d#"
 * 输出：true
 * 解释：S 和 T 都会变成 “”。
 *
 * 示例3
 * 输入：S = "a##c", T = "#a#c"
 * 输出：true
 * 解释：S 和 T 都会变成 “c”。
 *
 * 示例4
 * 输入：S = "a#c", T = "b"
 * 输出：false
 * 解释：S 会变成 “c”，但 T 仍然是 “b”。
 */

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    function getStr(s, arr = [],i=0){
        while(i<s.length){
            let temp = s.charAt(i);
            if(temp === '#'){
                arr.pop();
            }else{
                arr.push(temp)
            }
            i++
        }
        return arr.join("")
    }
    let s = getStr(S);
    let t = getStr(T);
    return s === t;
};
