class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        let seen = new Set()

        while(n !==1){
            if( seen.has(n)){
                return false
            }else{
                seen.add(n)
            }
            let num = n
            let temp =0
            while(num>0){
                let digit = num%10
                temp+=digit*digit
                num = Math.floor(num/10)
            }

            n=temp
        }
        return true
    }
}
