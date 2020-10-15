/**
 * Create by Chelly
 * 2020/10/15
 */

/**
 * 题目描述
 * 给定一个二叉树，返回它的 前序 遍历。
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
 * 输出: [1,2,3]
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

var preorderTraversal = function(root) {
  let res = [];
  function getRoot(r){
      if(r){
          res.push(r.val);
          getRoot(r.left);
          getRoot(r.right);
      }
  }
  getRoot(root);
  return res;
};

var preorderTraversal1 = function(root) {
  let res = [];
  let stk = [];
  while(root||stk.length){
      if(root){
          stk.push(root);
          res.push(root.val);
          root = root.left
      }else{
          root = stk.pop();
          root = root.right;
      }
  }
  return res;
};