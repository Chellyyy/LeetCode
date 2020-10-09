/**
 * Create by Chelly
 * 2020/10/9
 */
/**
 * 题目描述
 * 给定一个链表，判断链表中是否有环。
 * 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。
 * 如果链表中存在环，则返回 true 。 否则，返回 false 。
 *
 * 注意
 * 链表中节点的数目范围是 [0, 104]
 * -105 <= Node.val <= 105
 * pos 为 -1 或者链表中的一个 有效索引 。
 *
 * 你能用 O(1)（即，常量）内存解决此问题吗？
 *
 */

/**
 * 示例1
 * 输入：head = [3,2,0,-4], pos = 1
 * 输出：true
 * 解释：链表中有一个环，其尾部连接到第二个节点。
 *
 * 示例2
 * 输入：head = [1,2], pos = 0
 * 输出：true
 * 解释：链表中有一个环，其尾部连接到第一个节点。
 *
 * 示例3
 * 输入：head = [1], pos = -1
 * 输出：false
 * 解释：链表中没有环。
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
var hasCycle = function (head) {
    //遍历这个链表，把每个节点存下来，如果这个节点已经存在则返回true
    //这里用Map会更好
    let arr = [];
    while (head) {
        if (arr.indexOf(head) > -1) {
            return true
        }
        arr.push(head);
        head = head.next;
    }
    return false
};

var hasCycle2 = function (head) {
    //用快慢指针，想象有两个人在链表中走路，一个走得快，一个走得慢
    //如果链表中有环，则走得快的人肯定会与走得慢的人相遇
    if (!head || !head.next) {
        return false
    }
    let fast = head.next, slow = head;
    while (fast !== slow) {
        if (fast === null || fast.next === null) {
            return false
        }
        fast = fast.next.next;
        slow = slow.next;
    }
    return true
};