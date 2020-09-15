/**
 * Create by Chelly
 * 2020/9/15
 */
/**
 * 题目描述
 * 给定一个二叉树，返回它的中序 遍历。
 *
 * 注意
 * 递归算法很简单，你可以通过迭代算法完成吗？
 */

/**
 * 示例1
 * 输入: [1,null,2,3]
 * 1
 *  \
 *   2
 *  /
 * 3

 输出: [1,3,2]
 *
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal1 = function(root) {
    //递归
    let arr = [];
    function getRoot(r){
        if(r&&!r.left&&!r.right){
            arr.push(r.val);
            return
        }
        if(r&&r.left){
            getRoot(r.left)
        }
        r&&arr.push(r.val);
        if(r&&r.right){
            getRoot(r.right)
        }
    }
    getRoot(root);
    return arr;
};


var inorderTraversa2 = function(root) {
    //迭代
    const res = [];
    const stk = [];
    while (root || stk.length) {
        while (root) {
            stk.push(root);
            root = root.left;
        }
        root = stk.pop();
        res.push(root.val);
        root = root.right;
    }
    return res;
};

