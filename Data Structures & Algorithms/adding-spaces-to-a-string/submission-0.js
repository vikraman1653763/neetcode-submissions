class Solution {
    /**
     * @param {string} num
     * @return {string}
     */
    addSpaces(s, spaces) {
        let res = ''
        let  j =0
        for(let i=0;i<s.length;i++){
            if(i===spaces[j]){
                res+=' '+s[i]
                j++
            }else{
                res+=s[i]
            }
        }
        return res
    }
}
