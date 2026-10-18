class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {

        if(n<0){
            x = 1/x
            n=-n
        }
       let ans =1

        while (n>0){
            if(n%2 ===1){
                ans*=x
            }
            x*=x
            n=Math.floor(n/2)
        }
        return ans
    }
}
