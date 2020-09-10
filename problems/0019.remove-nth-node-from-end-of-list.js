
/**
 * 题目描述
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 *
 * 注意
 * 给定的 n 保证是有效的。
 * 尝试使用一趟扫描实现
 */

/**
 * 示例
 * 给定一个链表: 1->2->3->4->5, 和 n = 2.
 * 当删除了倒数第二个节点后，链表变为 1->2->3->5.
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
 * @param {number} n
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}
var removeNthFromEnd1 = function(head, n) {
    let i = 0;
    function getNode(h){
        if(h.next){
            getNode(h.next);
            i++;
            if(i===(n+1)){
                h.next = h.next.next;
            }
        }else{
            i++;
        }
    }
    getNode(head);
    if(i===n){
        head = head.next;
    }
    return head;
};
var removeNthFromEnd2 = function(head, n) {
    // 两层循环，先取到链表的长度，再根据n删除相应结点
    // temp作为哑结点辅助处理边界情况
    let i = 0,h = head, temp = new ListNode(0);
    temp.next=head;
    while(h!==null){
        i++;
        h = h.next
    }
    h = temp;
    while(i-n>0){
        h = h.next;
        i--;
    }
    // 引用类型，本质上还是处理了head
    h.next = h.next.next;
    return temp.next;
};

var removeNthFromEnd3 = function(head, n) {
    // 设置两个结点的距离为n，两个结点同时向后移动
    // 当R结点为null时即L结点已经到了需要删除的结点的前一个结点
    let temp = new ListNode(0);
    temp.next = head;
    let L = temp, R = temp;
    while(n>-1){
        R = R.next;
        n--;
    }
    while(R){
        L = L.next;
        R = R.next;
    }
    L.next = L.next.next;
    return temp.next;
};
