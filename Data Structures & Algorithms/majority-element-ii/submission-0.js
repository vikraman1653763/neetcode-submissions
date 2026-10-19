class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let freq = new Map()

        for(let n of nums){
            freq.set(n,(freq.get(n)||0)+1)
        }

        let nums1 = []
        console.log(nums.length/3,Math.floor(nums.length/3))
        for(let[k,v]of freq){
            if(v >nums.length/3){
                nums1.push(k)
            }
        }
        return nums1
    }
}
