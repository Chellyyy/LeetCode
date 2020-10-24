/**
 * Create by Chelly
 * 2020/10/21
 */

/**
 * 题目描述
 * 给定一个单链表 L：L0→L1→…→Ln-1→Ln ，
 * 将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→…
 *
 * 注意
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 */

/**
 * 示例1
 * 给定链表 1->2->3->4, 重新排列为 1->4->2->3.
 *
 * 示例2
 * 给定链表 1->2->3->4->5, 重新排列为 1->5->2->4->3.
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
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  //遍历后重排
  let dummy = new ListNode(-1, head);
  let temp = dummy.next;
  let arr = [];
  while (temp) {
    arr.push(temp);
    temp = temp.next;
  }
  let h = dummy;
  while (arr.length > 1) {
    let node1 = arr.shift();
    let node2 = arr.pop();
    node2.next = null;
    node1.next = node2;
    h.next = node1;
    h = node2;
  }
  if (arr.length) {
    let temp = arr.pop();
    temp.next = null;
    h.next = temp;
  }
  return dummy.next;
};

//目标链表为原链表左半端和反转后的右半端合并后的结果
//链表中点 0876
//反转链表 0206
var reorderList1 = function (head) {
  function middle(h) {
    let l = h, r = h;
    while (r && r.next) {
      l = l.next;
      r = r.next.next;
    }
    return l;
  }

  function reverse(head) {
    let pre = null;
    let h = head;
    while (h) {
      let temp = h.next;
      h.next = pre;
      pre = h;
      h = temp;
    }
    return pre
  }

  function merge(l1, l2) {
    let temp = l1;
    let m = l1;
    while (temp) {
      temp = temp.next;
      l1.next = l2;
      l2 = temp;
      l1 = l1.next;
      temp = l1;
    }
    return m;
  }

  if (head && head.next) {
    let m = middle(head);
    let l2 = m;
    let reverseL2 = reverse(l2);
    let l1 = head;
    m.next = null;
    return merge(l1, reverseL2);
  } else {
    return head
  }
}
