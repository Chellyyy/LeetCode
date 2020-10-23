/**
 * Create by Chelly
 * 2020/10/23
 */
/**
 * 题目描述
 * 请判断一个链表是否为回文链表。
 *
 * 注意
 * 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
 */

/**
 * 示例1
 * 输入: 1->2
 * 输出: false
 *
 * 示例2
 * 输入: 1->2->2->1
 * 输出: true
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  // 回文链表的话从前往后遍历和从后往前遍历一定是相等的
  let temp = head;
  function getPath(h){
    if(h){
      getPath(h.next);
      if(h.val===temp.val){
        temp = temp.next
      }
    }
  }
  getPath(head);
  return !temp
};