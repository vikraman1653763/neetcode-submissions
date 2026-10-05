class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let res =[]
        let l =0

        for(let r =0;r<nums.length;r++){
            if(r-l+1 === k){
                res.push(Math.max(...nums.slice(l, r + 1)))
                l++
            }
        }
        return res
    }
}
