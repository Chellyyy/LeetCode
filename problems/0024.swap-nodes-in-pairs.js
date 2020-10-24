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
function ListNode(val, next) {
this.val = (val===undefined ? 0 : val)
this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let h = new ListNode(-1, head);
    let t = h.next;
    let arr = [];
    while(t){
        arr.push(t);
        t = t.next;
    }
    let t2 = h;
    while(arr.length>1){
        let temp1 = arr.shift();
        let temp2 = arr.shift();
        temp1.next = null;
        temp2.next = temp1;
        t2.next = temp2;
        t2 = t2.next.next;
    }
    if(arr.length){
        t2.next = arr.shift();
    }
    return h.next;
};

var swapPairs = function(head) {
    let dummy = new ListNode(-1, head);
    let h = dummy;
    while(h.next!==null && h.next.next!=null){
        let node1 = h.next;
        let node2 = h.next.next;
        node1.next = node2.next;
        node2.netx = node1;
        h.next = node2;
        h = node1;
    }
    return dummy.next;
};