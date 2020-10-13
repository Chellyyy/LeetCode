/**
 * 题目描述
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 *
 */

/**
 * 示例1
 * 输入：head = [1,2,3,4]
 * 输出：[2,1,4,3]
 *
 * 示例2
 * 输入：head = []
 * 输出：[]
 *
 * 示例3
 * 输入：head = [1]
 * 输出：[1]
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let h = new ListNode(-1, head);
    while(h.next && h.next.next){
        let temp = h.next.val;
        h.next.val = h.next.next.val;
        h.next.next.val = temp;
        h = h.next.next;
    }
    return head;
};
