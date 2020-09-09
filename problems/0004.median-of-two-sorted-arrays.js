/**
 * Create by Chelly
 * 2020/9/9
 */

/**
 * 题目描述
 * 给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。
 * 请你找出这两个正序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 * 你可以假设 nums1 和 nums2 不会同时为空。
 *
 */

/**
 * 示例1
 * nums1 = [1, 3]
 * nums2 = [2]
 * 则中位数是 2.0
 *
 * 示例2
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * 则中位数是 (2 + 3)/2 = 2.5
 *
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    //合并数组后对数组进行排序，然后返回中位数
    let l1 = nums1.length;
    let l2 = nums2.length;
    let l = nums1.concat(nums2);
    if (!(nums1[l1 - 1] < nums2[0])) {
        l.sort((a, b) => {
            return a - b
        })

    }
    if ((l1 + l2) % 2) {
        return l[parseInt((l1 + l2) / 2)]
    } else {
        return (l[parseInt((l1 + l2) / 2)] + l[parseInt((l1 + l2) / 2) - 1]) / 2
    }
}