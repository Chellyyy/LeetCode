/**
 * 题目描述
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 * 如果数组中不存在目标值 target，返回 [-1, -1]。
 *
 * 注意
 * 你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？
 * 0 <= nums.length <= 105
 * -109 <= nums[i] <= 109
 * nums 是一个非递减数组
 * -109 <= target <= 109
 *
 */

/**
 * 示例1
 * 输入：nums = [5,7,7,8,8,10], target = 8
 * 输出：[3,4]
 *
 * 示例2
 * 输入：nums = [5,7,7,8,8,10], target = 6
 * 输出：[-1,-1]
 *
 * 示例3
 * 输入：nums = [], target = 0
 * 输出：[-1,-1]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const arr = [-1,-1];
    if(!nums.length){return arr}
    let i = 0, l = nums.length, j = l - 1;
    while(i<l||j>=0){
        let t1 = nums[i], t2 = nums[j];
        if(t1===target&&arr[0]===-1){
            arr[0] = i
        }else{i++}
        if(t2===target&&arr[1]===-1){
            arr[1] = j
        }else{j--}
    }
    return arr
};

var searchRange2 = function(nums, target) {
    const s = [-1,-1];
    if(!nums.length){return s}
    const left = find(nums,target, true);
    const right = find(nums, target, false)-1;
    if(left<=right&&nums[left]===target&&nums[right]===target){
        return [left,right]
    }
    return s;
    function find(nums, target, lower){
        let left = 0, right = nums.length - 1;
        while(left <= right){
            const mid = Math.floor((left+right)/2);
            if(nums[mid]>target||(lower&&nums[mid]>=target)){
                right = mid - 1
            }else {
                left = mid + 1
            }
        }
        return left
    }
};
