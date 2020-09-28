/**
 * Create by Chelly
 * 2020/9/28
 */
/**
 * 题目描述
 * 给定一个完美二叉树，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：
 * struct Node {
 *  int val;
 *  Node *left;
 *  Node *right;
 *  Node *next;
 * }
 * 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。
 * 初始状态下，所有 next 指针都被设置为 NULL。
 *
 * 注意
 * 你只能使用常量级额外空间。
 * 使用递归解题也符合要求，本题中递归程序占用的栈空间不算做额外的空间复杂度。
 */

/**
 * 示例1
 * 输入：{"$id":"1","left":{"$id":"2","left":{"$id":"3","left":null,"next":null,"right":null,"val":4},"next":null,"right":{"$id":"4","left":null,"next":null,"right":null,"val":5},"val":2},"next":null,"right":{"$id":"5","left":{"$id":"6","left":null,"next":null,"right":null,"val":6},"next":null,"right":{"$id":"7","left":null,"next":null,"right":null,"val":7},"val":3},"val":1}
 * 输出：{"$id":"1","left":{"$id":"2","left":{"$id":"3","left":null,"next":{"$id":"4","left":null,"next":{"$id":"5","left":null,"next":{"$id":"6","left":null,"next":null,"right":null,"val":7},"right":null,"val":6},"right":null,"val":5},"right":null,"val":4},"next":{"$id":"7","left":{"$ref":"5"},"next":null,"right":{"$ref":"6"},"val":3},"right":{"$ref":"4"},"val":2},"next":null,"right":{"$ref":"7"},"val":1}
 *
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    let tempArr = [];
    function getLayer(t,arr){
        if(t===null||(t.left===null&&t.right===null)){
            return
        }
        let tmpArr = [];
        for(let item of arr){
            item ? tmpArr.push(item.left,item.right): "";
        }
        tempArr.push(tmpArr);
        getLayer(t.left,tmpArr)
    }
    getLayer(root,[root]);
    for(let items of tempArr){
        for(let i in items){
            i = parseInt(i);
            if(items[i+1]){
                items[i].next = items[i+1]
            }
        }
    }
    return root;
};

var connect1 = function(root) {
    //广度优先
    let tempArr = [];
    tempArr.push(root);
    while (tempArr.length){
        let length = tempArr.length;
        for(let i = 0;i<length;i++){
            let temp = tempArr.shift();
            if(i<length-1){
                temp.next = tempArr[0]
            }
            if(temp&&temp.left){
                tempArr.push(temp.left)
            }
            if(temp&&temp.right){
                tempArr.push(temp.right)
            }
        }
    }
    return root;
};

var connect2 = function(root) {
    // 利用已存在的next指针
    // 在上一层为下一层的节点建立连接
    if(root===null){
        return root
    }
    let leftMost = root;
    while(leftMost.left !== null){
        let head = leftMost;
        while(head !== null){
            head.left.next = head.right;
            if(head.next !== null){
                head.right.next = head.next.left;
            }
            head = head.next;
        }
        leftMost = leftMost.left;
    }
    return root;
};