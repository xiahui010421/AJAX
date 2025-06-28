
/**
* @param {numberl} nums
* @param {number} target
* @return {number [ ]}
*/
// 两数之和，给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target 的那两个 整数，并返回它们的数组下标。
var twosum = function (nums, target){
    for(let i = 0;i<nums.length;i++){
        for(let j = i+1;j<nums.length;j++){
            if(nums[i]+nums[j] === target){
                return [i,j]
            }
        }
    }
    return []
}
console.log(twosum([2,3,11,15],5))