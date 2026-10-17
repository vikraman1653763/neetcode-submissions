class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let carry = 1
        for(let i=digits.length-1;i>=0;i--){
            
            let added = digits[i]+carry
            
            
                digits[i]= added%10
                carry = Math.floor(added/10)
            
               if(carry===0){
                break;
               }
            
        }
        if (carry >0 ){
            digits.push(0)

            for(let i = digits.length-1;i>=0;i--){
                digits[i]=digits[i-1]
            }
            digits[0]=carry
        }
        return digits

    }
}
