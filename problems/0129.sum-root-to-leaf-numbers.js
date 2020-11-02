/**
 * Create by Chelly
 * 2020/10/29
 */

/**
 * 题目描述
 * 给定一个二叉树，它的每个结点都存放一个 0-9 的数字，每条从根到叶子节点的路径都代表一个数字。
 * 例如，从根到叶子节点路径 1->2->3 代表数字 123。
 * 计算从根到叶子节点生成的所有数字之和。
 * 说明: 叶子节点是指没有子节点的节点。
 *
 * 注意
 * 1 <= arr.length <= 1000
 * -1000 <= arr[i] <= 1000
 *
 */

/**
 * 示例1
 * 输入: [1,2,3]
 *      1
 *     / \
 *    2   3
 * 输出: 25
 * 解释:
 * 从根到叶子节点路径 1->2 代表数字 12.
 * 从根到叶子节点路径 1->3 代表数字 13.
 * 因此，数字总和 = 12 + 13 = 25.
 *
 * 示例2
 * 输入: [4,9,0,5,1]
 *     4
 *    / \
 *   9   0
 *  / \
 * 5   1
 * 输出: 1026
 * 解释:
 * 从根到叶子节点路径 4->9->5 代表数字 495.
 * 从根到叶子节点路径 4->9->1 代表数字 491.
 * 从根到叶子节点路径 4->0 代表数字 40.
 * 因此，数字总和 = 495 + 491 + 40 = 1026.
 *
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    // 深度优先、先序遍历
    let result = 0;
    function getPath(root, data) {
        if(root){
            data+= root.val;
            getPath(root.left, data);
            getPath(root.right, data);
            !root.left && !root.right && (result+= parseInt(data))
        }
    }
    getPath(root, '');
    return result;
};
var sumNumbers2 = function(root) {
    // 广度优先
    let result = 0;
    if(!root){
        return result
    }

    let rootList = [root];
    let dataList = [root.val];
    while (rootList.length) {
        let r = rootList.shift();
        let data = dataList.shift();
        if(r.left){
            rootList.push(r.left);
            dataList.push(data*10+r.left.val)
        }
        if(r.right){
            rootList.push(r.right);
            dataList.push(data*10+r.right.val)
        }
        if(!r.left && !r.right){
            result += data;
        }
    }
    return result
};