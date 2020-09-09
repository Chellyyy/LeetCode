/**
 * Create by Chelly
 * 2020/9/9
 */

/**
 * 题目描述
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 *
 */

/**
 * 示例
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
 *
 */

var addTwoNumbers = function (l1, l2) {
    let l3 = {};
    let temp = 0;
    //链表，temp记录进位
    function getSum(l1, l2, l3) {
        if (!l1 && !l2 && !temp) {
            return
        }
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + temp;
        sum >= 10 ? temp = 1 : temp = 0;
        l3.val = sum % 10;
        let t1 = l1 ? l1.next : null;
        let t2 = l2 ? l2.next : null;
        if (t1 || t2 || temp) {
            l3.next = {};
            getSum(t1, t2, l3.next)
        } else {
            l3.next = null;
        }
    }

    getSum(l1, l2, l3);
    return l3;
};