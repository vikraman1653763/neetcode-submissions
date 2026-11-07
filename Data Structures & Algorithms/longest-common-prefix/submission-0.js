class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let res = strs[0]

        for(let i =1;i<strs.length;i++){
            let word = strs[i]
            let temp =''
            for(let j=0;j<res.length;j++){
                if(res[j] ===word[j]){
                    temp+=res[j] 
                }else{
                    res = temp
                    temp = ''
                    break
                }
            }
        }
        return res

    }
}
