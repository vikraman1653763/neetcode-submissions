class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a, b) => a - b);
        let res = [];
        for (let i = 0; i < nums.length; i++) {
            
            let left = i+1;
            while(nums[left] ===nums[i]){
                left++
            }

            let right = nums.length - 1;
            while(nums[right] === nums[i]){
                right--
            }

            while (left < right) {
                let sum = nums[left]+nums[right]+nums[i]
                if(sum === 0){
                    res.push([nums[i],nums[left],nums[right]])
                    i++
                }else if(sum> 0){
                    right--
                }else{
                    left++
                }
            }
        }
        return res
    }
}
