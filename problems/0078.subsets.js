/**
 * 题目描述
 * 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 *
 * 注意
 * 解集不能包含重复的子集。
 */

/**
 * 示例
 * 输入: nums = [1,2,3]
 * 输出:
 * [
 *   [3],
 *   [1],
 *   [2],
 *   [1,2,3],
 *   [1,3],
 *   [2,3],
 *   [1,2],
 *   []
 * ]
 *
 */


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    nums = nums.sort((a,b)=>{return a-b})
    let arr = {};
    arr.test = [];
    for(let i =1,length=nums.length+1;i<length;i++){
        getArr([],nums,i,0);
    };
    function getArr(a,b,L,j){
        a.sort((a,b)=>{return a-b});
        let key = a.join();
        if(a.length === L&&!arr[key]){
            arr[key] = a;
            return
        }
        for(let i =j,l=b.length;i<l;i++){
            let temp = b[i];
            getArr(a.concat(temp),b,L,i+1);
        }
    }
    return Object.values(arr);
};

function subsets2 (nums){
    // 优化递归
    const t = [];
    const ans = [];
    const n = nums.length;
    const dfs = (cur) => {
        if (cur === nums.length) {
            ans.push(t.slice());
            return;
        }
        t.push(nums[cur]);
        dfs(cur + 1, nums);
        t.pop(t.length - 1);
        dfs(cur + 1, nums);
    };
    dfs(0, nums);
    return ans;
}

function subsets3(nums) {
    // 二进制
    // 1<<3 ->1000
    //   001100
    // & 001010
    //   001000
    const ans = [];
    const n = nums.length;
    for (let mask = 0; mask < (1 << n); ++mask) {
        const t = [];
        for (let i = 0; i < n; ++i) {
            if (mask & (1 << i)) {
                t.push(nums[i]);
            }
        }
        ans.push(t);
    }
    return ans;
}
