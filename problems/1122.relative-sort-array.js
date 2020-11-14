
/**
 * 题目描述
 * 给你两个数组，arr1 和 arr2，
 * arr2 中的元素各不相同
 * arr2 中的每个元素都出现在 arr1 中
 * 对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。
 *
 * 注意
 * arr1.length, arr2.length <= 1000
 * 0 <= arr1[i], arr2[i] <= 1000
 * arr2 中的元素 arr2[i] 各不相同
 * arr2 中的每个元素 arr2[i] 都出现在 arr1 中
 *
 */

/**
 * 示例1
 * 输入：arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
 * 输出：[2,2,2,1,4,3,3,9,6,7,19]
 */

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const temp = arr2.slice();
    let n = arr1.length;
    const other = [];
    for(let i = 0; i < n; i++){
        const index = arr2.indexOf(arr1[i])
        if(index>-1){
            arr2.splice(index, 1)
        }else {
            other.push(arr1[i])
        }
    }
    other.sort((a,b)=>{return a - b})
    while(other.length){
        const min = other.shift();
        const index = temp.indexOf(min)
        if(index>-1){
            temp.splice(index, 0, min)
        }else{
            temp.push(min)
        }
    }
    return temp
};
