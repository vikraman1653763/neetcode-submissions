class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {
        for(let i =0;i<t.length;i++){
            if(s[i] !== t[i]){
                return t.length - i
            }
        }
        return 0
    }
}
