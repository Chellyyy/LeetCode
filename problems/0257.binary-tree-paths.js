/**
 * Create by Chelly
 * 2020/9/9
 */

/**
 * 题目描述
 * 给定一个二叉树，返回所有从根节点到叶子节点的路径。
 * 叶子节点是指没有子节点的节点。
 *
 */

/**
 * 示例
 * 输入:
 *
 *     1
 *   /   \
 *  2     3
 *   \
 *    5
 * 输出: ["1->2->5", "1->3"]
 * 解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    // 递归
    let arr = [];
    function getPath(root, a) {
        if (root) {
            if (root.left == null && root.right == null) {
                arr.push(a.concat(root.val).join("->"));
                return
            }
            if (root.left) {
                getPath(root.left, root.val ? a.concat(root.val) : a);
            }
            if (root.right) {
                getPath(root.right, root.val ? a.concat(root.val) : a)
            }
        }
    }
    getPath(root, []);
    return arr;
};