/**
 * Create by Chelly
 * 2020/9/27
 */

/**
 * 题目描述
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 */

/**
 * 示例
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 *
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next)
}

var mergeTwoLists = function (l1, l2) {
    // 头节点
    let head = new ListNode(-1, l1);
    let temp2 = l2,
        //用于记录的上一个节点
        tempNode, temp = head;
    while (temp2) {
        if (temp) {
            if (temp.val === -1 || temp.val <= temp2.val) {
                tempNode = temp;
                temp = temp.next
            } else {
                temp = tempNode;
                let next = temp.next;
                temp.next = {val: temp2.val, next: next};
                temp2 = temp2.next;
            }
        } else {
            temp = tempNode;
            temp.next = temp2;
            temp2 = null;
        }
    }
    return head.next;
};
//递归
var mergeTwoLists2 = function(l1, l2) {
    if (l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    } else if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};

//迭代
var mergeTwoLists3 = function(l1, l2) {
    const prehead = new ListNode(-1);

    let prev = prehead;
    while (l1 != null && l2 != null) {
        if (l1.val <= l2.val) {
            prev.next = l1;
            l1 = l1.next;
        } else {
            prev.next = l2;
            l2 = l2.next;
        }
        prev = prev.next;
    }

    // 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可
    prev.next = l1 === null ? l2 : l1;

    return prehead.next;
};