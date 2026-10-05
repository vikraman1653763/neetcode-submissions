class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let res =[]
        let deque =[]
        let l =0
        for(let r =0;r<nums.length;r++){
            while( deque.length>0 && nums[deque[deque.length-1]]<nums[r]){
                deque.pop()
            }
            deque.push(r)
            if(r-l+1 === k){
                res.push(nums[deque[0]])
           
            if (deque[0] === l) {
                 deque.shift()
                }
                l++
            }
        }
        return res
    }
}
