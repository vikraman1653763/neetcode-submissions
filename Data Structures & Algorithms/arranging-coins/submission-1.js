class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    arrangeCoins(n) {
        if (n ===1) return 1
        let i = 0
        let j = n
        while (i<j){
            let m = Math.floor((j+i)/2)
            let k = (m*(m+1))/2
            
            if (k === n){
                return m
            }else if (k>n){
                j=m
            }else{
                i=m+1
            }
        }
        return i-1
    }
}
