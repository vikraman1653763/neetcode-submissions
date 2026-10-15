class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findPeakElement(nums) {
        let i = 0
        let j = nums.length-1

        while(i<j){
            let m = Math.floor((i+j)/2)

            if(nums[m]>nums[m+1]){
                return m
            }else if (nums[m]<nums[m+1]){
                i = m+1
            }
        }
        return j
    }
}
