class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, tar) {
        let n = nums.length
        let i=0
        let j = n-1
        while(i<j){
            let sum = nums[i]+nums[j]  
            if(sum === tar){
                return[i+1,j+1]
            }else if(sum>tar){
                j--
            }else{
                i++
            }
        }
    }
}
