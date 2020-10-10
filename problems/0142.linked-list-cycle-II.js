/**
 * Create by Chelly
 * 2020/10/10
 */

/**
 * 题目描述
 * 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
 * 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
 * 说明：不允许修改给定的链表。
 *
 * 注意
 * 你是否可以不用额外空间解决此题？
 *
 */

/**
 * 示例1
 * 输入：head = [3,2,0,-4], pos = 1
 * 输出：tail connects to node index 1
 * 解释：链表中有一个环，其尾部连接到第二个节点。
 *
 * 示例2
 * 输入：head = [1,2], pos = 0
 * 输出：tail connects to node index 0
 * 解释：链表中有一个环，其尾部连接到第一个节点。
 *
 *
 * 示例3
 * 输入：head = [1], pos = -1
 * 输出：no cycle
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
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let result = null;
    if(!head||!head.next){
        return result;
    }
    let map = new Map();
    while(head){
        if(map.has(head)){
            result = map.get(head);
            return result;
        }
        map.set(head,head);
        head = head.next;
    }
    return result

};

/*          |<-b->|
 *              x
 *    |<-a->| x   o
 *     x x x x     x
 *            x   x
 *              x
 *          |<- c->|
 * 假设当前有这样一个有环的链表
 * 我们设头结点到入环点的距离为 a，入环点到相遇点的距离为 b，相遇点到入环点的距离为 c
 * 则有
 * a+n(b+c)+b = a+(n+1)b+nc = 2(a+b)
 * 由上面公式可得 a = (n-1)(b+c)+c
 * 可推得从相遇点到入环点的距离加上 n-1 圈的环长，恰好等于从链表头部到入环点的距离
 * 所以在两个指针相遇后，我们从头结点开始，和slow指针一起向后移动，最终他们会在入环点相遇
 */
var detectCycle2 = function(head) {
    if(!head||!head.next){
        return null;
    }
    let fast = head,slow = head;
    while(fast){
        slow = slow.next;
        if(fast.next){
            fast = fast.next.next;
        }else {
            return null
        }
        if(fast === slow){
            let p = head;
            while(p!==slow){
                p = p.next;
                slow = slow.next;
            }
            return p
        }
    }
    return null;
};