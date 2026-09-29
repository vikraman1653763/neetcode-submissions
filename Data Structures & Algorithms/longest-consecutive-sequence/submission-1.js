class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        
        nums = nums.sort((a,b)=>a-b)
        let max =nums[0]
        let seq =1
        let res = 1
        console.log("arranged:",nums)
        for(let i=1;i<nums.length;i++){
            if(nums[i]=== max+1){
                seq++
                max = nums[i]
            }else if(nums[i] === max){
                continue
            }else{
                max = nums[i]
            }
                res = Math.max(res,seq)
        }
        return res
    }
}
