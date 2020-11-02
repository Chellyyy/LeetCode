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
  // 深度优先
  let arr = 0;
  function getPath(f, data){
    if(f){
      data+= f.val;
      getPath(f.left, data);
      getPath(f.right, data);
      !f.left && !f.right && (arr += parseInt(data))
    }
  }
  getPath(root, '');
  return arr
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers1 = function(root) {
  //广度优先
  let sum = 0;
  if(!root){
    return sum;
  }
  let numsArr = [], rootsArr = [];
  numsArr.push(root.val);
  rootsArr.push(root);
  while(rootsArr.length){
    let r = rootsArr.shift();
    let n = numsArr.shift();
    if(!r.left && !r.right){
      sum += n;
    }
    if(r.left){
      numsArr.push(n * 10 + r.left.val);
      rootsArr.push(r.left);
    }
    if(r.right){
      numsArr.push(n * 10 + r.right.val);
      rootsArr.push(r.right);
    }
  }
  return sum
};