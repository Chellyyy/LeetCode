/**
 * Create by Chelly
 * 2020/9/15
 */

/**
 * 题目描述
 * 给出一个区间的集合，请合并所有重叠的区间。
 *
 * 注意
 * 所有数字（包括 target）都是正整数。
 * 解集不能包含重复的组合。
 */

/**
 * 示例1
 * 输入: intervals = [[1,3],[2,6],[8,10],[15,18]]
 * 输出: [[1,6],[8,10],[15,18]]
 * 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 *
 * 示例2
 * 输入: intervals = [[1,4],[4,5]]
 * 输出: [[1,5]]
 * 解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
 *
 */

var merge = function(intervals) {
    intervals.sort((a,b)=>{return a[0]-b[0]});
    // 边界判断
    let arr = intervals.length ? [intervals.shift()] : [];
    while(intervals.length){
        let temp = intervals.shift();
        for(let i in arr){
            let item = arr[i];
            if((temp[0]<=item[1]&&temp[0]>=item[0])){
                let min = Math.min(temp[0],item[0]);
                let max = Math.max(temp[1],item[1]);
                arr[i] = [min,max];
                break;
            }
            if(parseInt(i)===arr.length-1){
                arr.push(temp)
            }
        }
    }
    return arr;
};