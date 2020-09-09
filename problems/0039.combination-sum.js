/**
 * Create by Chelly
 * 2020/9/9
 */

/**
 * 题目描述
 * 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 * candidates 中的数字可以无限制重复被选取。
 *
 * 注意
 * 所有数字（包括 target）都是正整数。
 * 解集不能包含重复的组合。
 */

/**
 * 示例1
 * 输入：candidates = [2,3,6,7], target = 7,
 * 所求解集为：
 * [
 * [7],
 * [2,2,3]
 * ]
 *
 * 示例2
 * 输入：candidates = [2,3,5], target = 8,
 * 所求解集为：
 * [
 * [2,2,2,2],
 * [2,3,3],
 * [3,5]
 * ]
 *
 */
var combinationSum1 = function (candidates, target) {
    // 写得很乱不建议参考。。。。。。。
    let arr = [];
    let index = candidates.indexOf(target);
    if (index > -1) {
        arr.push(candidates.splice(index, 1))
    }
    candidates.sort((a, b) => {
        return a - b
    });
    let min = candidates[0];
    function toSum(can, t, a) {
        let now = 0;
        for (let i = 0; i < can.length; i++) {
            now = t - can[i];
            let index = can.indexOf(now);
            if (index > -1) {
                //傻傻地去重。。
                let tempA = a.concat([now, can[i]]).sort((a, b) => {
                    return a - b
                });
                let r = false;
                r = arr.every(item => {
                    return item.join("") !== tempA.join("")
                });
                if (r) {
                    arr.push(tempA)
                }
                //防止取到一种方法就停
                if (now >= min) {
                    toSum(can, now, a.concat([can[i]]))
                }
                continue
            } else {
                if (now < min) {
                    continue
                }
                toSum(can, now, a.concat([can[i]]))
            }
        }
    }

    toSum(candidates, target, []);
    return arr;
};

var combinationSum2 = function (candidates, target) {
    //借鉴别人的方法改写的，先对数组进行排序
    let arr = [];
    candidates = candidates.sort((a, b) => {
        return b - a
    });
    let length = candidates.length, minNum = candidates[length - 1];
    function getSum(tempArr, targ, start) {
        if (targ === 0) {
            arr.push(tempArr.slice());
            return
        }
        //递归时如果当前的target已经小于最小值，就退出，减少循环
        if (targ < minNum) {
            return
        }
        for (let i = start; i < length; i++) {
            //push进去的数要记得pop出来，因为push是改变本身数组的操作
            tempArr.push(candidates[i]);
            getSum(tempArr, targ - candidates[i], i);
            tempArr.pop();
        }
    }
    getSum([], target, 0);
    return arr;
};