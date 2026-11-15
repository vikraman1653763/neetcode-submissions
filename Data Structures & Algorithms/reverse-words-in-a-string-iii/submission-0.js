class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    reverseWords(s) {

        let temp = ''
        let i=0
        let res =''
        while(i<s.length){
            if(s[i] === ' '){
                res+=temp+' '
                temp = ''
            }else{
                temp= s[i]+temp
            }
            i++
        }
        if(temp.length > 0){
            res+=temp
        }
        return res
    }
}
