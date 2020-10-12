/**
 * Create by Chelly
 * 2020/10/13
 */

/**
 * 题目描述
 * 给你一棵所有节点为非负值的二叉搜索树，请你计算树中任意两节点的差的绝对值的最小值。
 *
 * 注意
 * 树中至少有 2 个节点。
 * 本题与783相同
 */

/**
 * 示例1
 * 输入：
 * 1
 * \
 * 3
 * /
 * 2
 * 输出：
 * 1
 * 解释：
 * 最小绝对差为 1，其中 2 和 1 的差的绝对值为 1（或者 2 和 3）。
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
var getMinimumDifference = function(root) {
    let arr = [];
    function getRoot(r){
        if(r){
            if(r.left){
                getRoot(r.left)
            }
            arr.push(r.val);
            if(r.right){
                getRoot(r.right)
            }
        }
    }
    getRoot(root);
    let temp = arr.map((item, index, arr)=>{
        return Math.abs(item - arr[index+1])
    });
    temp.splice(-1, 1);
    return Math.min.apply(null, temp)
};

var getMinimumDifference2 = function(root) {
    let ans = Number.MAX_SAFE_INTEGER, pre = -1;
    function getRoot(r){
        if(r){
            if(r.left){
                getRoot(r.left)
            }
            if(pre === -1){
                pre = r.val
            }else{
                ans = Math.min(ans, r.val - pre);
                pre = r.val;
            }
            if(r.right){
                getRoot(r.right)
            }
        }
    }
    getRoot(root);
    return ans;
};
