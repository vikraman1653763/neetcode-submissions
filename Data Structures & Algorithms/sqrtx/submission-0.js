class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        let left = 0
        let right = x
        while(left<=right){
            let mid = Math.floor((left+right)/2)

            let sq = mid* mid
            if(sq===x){
                return mid
            }else if(sq >x){
                right--
            }else{
                left++
            }
        }
        return right
    }
}
