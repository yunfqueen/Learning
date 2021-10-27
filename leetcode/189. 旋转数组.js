// 问题描述
// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
// 示例 输入: nums = [1,2,3,4,5,6,7], k = 3 输出: [5,6,7,1,2,3,4]

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 解题思路：创建一个新数组，将转换后的值放入新数组对应位置
var rotate = function (nums, k) {
    let len = nums.length
    let newArr = new Array(len)
    nums.forEach(function (item, index) {
        newArr[(index + k) % len] = item
    })
    Object.assign(nums, newArr)
};