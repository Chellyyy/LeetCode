/**
 * Create by Chelly
 * 2020/9/9
 */

/**
 * 题目描述
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 *
 * 注意
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
 *
 */

/**
 * 示例1
 * 输入: 123
 * 输出: 321
 *
 * 示例2
 * 输入: -123
 * 输出: -321
 *
 * 示例3
 * 输入: 120
 * 输出: 21
 */


/**
 * @param {number} x
 * @return {number}
 */
var reverse1 = function (x) {
    //通过字符串反转
    let t = x / Math.abs(x);
    let target = parseInt((x + "").split("").reverse().join("")) * t;
    let min = Math.pow(-2, 31);
    let max = Math.pow(2, 31) - 1;
    if (x < min || x > max || target > max || target < min || x === 0) {
        return 0
    }
    return target
};

/**
 * @param {number} x
 * @return {number}
 */
var reverse2 = function (x) {
    // 循环取余
    let now = 0;
    let temp = Math.abs(x);
    while (temp > 0) {
        now = now * 10 + temp % 10;
        temp = Math.floor(temp / 10);
    }
    if (x > 0) {
        return now > (Math.pow(2, 31) - 1) ? 0 : now
    } else {
        return -now < Math.pow(-2, 31) ? 0 : -now
    }
};