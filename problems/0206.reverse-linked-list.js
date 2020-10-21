/**
 * Create by Chelly
 * 2020/10/21
 */

/**
 * 题目描述
 * 反转一个单链表。
 *
 * 注意
 * 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
 */

/**
 * 示例1
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 *
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  function getPath(pre, cur){
    if(cur){
      let temp = cur.next;
      cur.next = pre;
      return getPath(cur,temp);
    }else {
      return pre
    }
  }
  return getPath(null, head);
};
var reverseList1 = function(head) {
  let h = head;
  let pre = null,temp;
  while(h){
    temp = h.next;
    h.next = pre;
    pre = h;
    h = temp;
  }
  return pre;
};