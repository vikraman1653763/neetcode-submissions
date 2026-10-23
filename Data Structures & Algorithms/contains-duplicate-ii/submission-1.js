class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        
        let i =0
        let j =0
        let seen  = new Set()
        while(j<nums.length){
            if(seen.has(nums[j])){
                return true
            }

            if( j-i +1 > k){
                seen.delete(nums[i])
                i++
            }
            seen.add(nums[j])
            j++
        }
console.log(seen)
        return false
    }
}
