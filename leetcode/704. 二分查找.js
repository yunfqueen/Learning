// 题目描述

// 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，
// 写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。

// 官方解
var search = function(nums, target) {
    let low = 0, high = nums.length - 1;
    while (low <= high) {
        const mid = Math.floor((high - low) / 2) + low;
        const num = nums[mid];
        if (num === target) {
            return mid;
        } else if (num > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
};

// 解 我的把数组做了截取，官方直接在原数组上进行查找while方法用的很好
var search = function (nums, target, index = 0) {
    if (nums.length < 0 || nums.length == 0) return -1;
    if (nums.length == 1) {
      return nums[0] == target ? index : -1;
    }
    let midnum = Math.ceil(nums.length / 2) - 1;
    let newnums = [];
    if (nums[midnum] > target) {
      newnums = nums.slice(0, midnum+1);
      return search(newnums, target, index);
    } else if (nums[midnum] == target) {
      return index + midnum;
    } else {
      newnums = nums.slice(midnum+1);
      return search(newnums, target, index + midnum+1);
    }
};

