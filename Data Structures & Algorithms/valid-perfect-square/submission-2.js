class Solution {
    /**
     * @param {number} num
     * @return {boolean}
     */
    isPerfectSquare(num) {
        let i=1, j=num
        while (i<=j){
            let mid = Math.floor((j+i)/2)
            
            let sq = mid*mid

            if (sq === num){
                return true
            }else if(sq>num){
                j = mid-1
            }else{
                i = mid+1
            }
        }
        return false

        
    }
}
