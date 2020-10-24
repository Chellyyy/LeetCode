/**
 * Create by Chelly
 * 2020/10/21
 */

/**
 * 题目描述
 * 你的朋友正在使用键盘输入他的名字 name。偶尔，在键入字符 c 时，按键可能会被长按，而字符可能被输入 1 次或多次。
 * 你将会检查键盘输入的字符 typed。如果它对应的可能是你的朋友的名字（其中一些字符可能被长按），那么就返回 True。
 *
 * 注意
 * name.length <= 1000
 * typed.length <= 1000
 * name 和 typed 的字符都是小写字母。
 *
 */

/**
 * 示例1
 * 输入：name = "alex", typed = "aaleex"
 * 输出：true
 * 解释：'alex' 中的 'a' 和 'e' 被长按。
 *
 * 示例2
 * 输入：name = "saeed", typed = "ssaaedd"
 * 输出：false
 * 解释：'e' 一定需要被键入两次，但在 typed 的输出中不是这样。
 *
 * 示例3
 * 输入：name = "leelee", typed = "lleeelee"
 * 输出：true
 *
 * 示例4
 * 输入：name = "laiden", typed = "laiden"
 * 输出：true
 * 解释：长按名字中的字符并不是必要的。
 */

/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
  //注意考虑边界情况
  let i = 0, j = 0, length = name.length, length2 = typed.length;
  while(j<length2){
    if(name[i]===typed[j]){
      i++;
      j++;
    }else if(name[i-1]===typed[j]){
      j++
    }else{
      return false
    }
  }
  return i === length;
};