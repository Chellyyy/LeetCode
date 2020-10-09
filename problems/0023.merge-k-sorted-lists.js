/**
 * Create by Chelly
 * 2020/10/9
 */

/**
 * 题目描述
 * 给你一个链表数组，每个链表都已经按升序排列。
 * 请你将所有链表合并到一个升序链表中，返回合并后的链表。
 *
 * 注意
 * k == lists.length
 * 0 <= k <= 10^4
 * 0 <= lists[i].length <= 500
 * -10^4 <= lists[i][j] <= 10^4
 * lists[i] 按 升序 排列
 * lists[i].length 的总和不超过 10^4
 */

/**
 * 示例1
 * 输入：lists = [[1,4,5],[1,3,4],[2,6]]
 * 输出：[1,1,2,3,4,4,5,6]
 * 解释：链表数组如下：
 * [
 * 1->4->5,
 * 1->3->4,
 * 2->6
 * ]
 * 将它们合并到一个有序链表中得到。
 * 1->1->2->3->4->4->5->6
 *
 * 示例2
 * 输入：lists = []
 * 输出：[]
 *
 * 示例3
 * 输入：lists = [[]]
 * 输出：[]
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    //递归
    function mergeList(l1,l2){
        if(l1===null){
            return l2
        }else if (l2===null){
            return l1
        }else if(l1.val<l2.val){
            l1.next = mergeList(l1.next,l2);
            return l1;
        }else{
            l2.next = mergeList(l1,l2.next);
            return l2;
        }
    }
    //迭代
    function mergeList(l1,l2){
        let p = new ListNode(-1);
        let pre = p;
        while(l1 && l2){
            if(l1.val<l2.val){
                pre.next = l1;
                l1=l1.next;
            }else{
                pre.next = l2;
                l2 = l2.next;
            }
            pre = pre.next;
        }
        l1===null?pre.next=l2:pre.next=l1;
        return p.next;
    }
    let l = lists.length;
    if(l>0){
        let temp = null;
        for(let i =0;i<l;i++){
            temp = mergeList(temp,lists[i])
        }
        return temp;
    }else{
        return null
    }
};