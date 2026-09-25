class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = new Map()
        for(let num of nums){
            if(map.get(num,0)>0){
                return true
            }
            map.set(num,(map.get(num)||0)+1)
        }
        return false
    }
}
