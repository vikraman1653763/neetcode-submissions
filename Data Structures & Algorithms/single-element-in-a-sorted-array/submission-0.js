class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNonDuplicate(nums) {
        let l = 0
        let r = nums.length -1

        while(l<r){
            let m = Math.floor((l+r)/2)

             if (
                (m === 0 || nums[m] !== nums[m - 1]) &&
                (m === nums.length - 1 || nums[m] !== nums[m + 1])
            ) {
                return nums[m];
            }

            if(m%2 === 0 ){
                if(nums[m] === nums[m+1] ){
                    l= m+2
                }else{
                    r = m
                }
            }else {
                if(nums[m] === nums[m-1]){
                    l = m+1
                }else{
                    r = m
                }
            }
        }
        return nums[l];
    }
}
