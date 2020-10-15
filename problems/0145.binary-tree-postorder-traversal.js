/**
 * Create by Chelly
 * 2020/10/15
 */
/**
 * 题目描述
 * 给定一个二叉树，返回它的 后序 遍历。
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
 *
 * 输出: [3,2,1]
 *
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var postorderTraversal = function(root) {
  let res = [];
  function getRoot(r) {
      if(r){
          getRoot(r.left);
          getRoot(r.right);
          res.push(r.val);
      }
  }
  getRoot(root);
  return res;
};

var postorderTraversal = function(root) {
    let res = [];
    let stk = [];
    let pre = null;
    while(root || stk.length){
        while(root){
            stk.push(root);
            root = root.left;
        }
        root = stk.pop();
        if(root.right===null || root.right===pre){
            res.push(root.val);
            pre = root;
            root = null;
        }else{
            stk.push(root);
            root = root.right;
        }
    }
    return res;
}