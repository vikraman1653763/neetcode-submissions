class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res =''
        for(let str of strs){
            if(res ===''){
                res+=str
            }else{
                res+='#'+str
            }
        }
        console.log(res)
        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res =[]
        let word =''
        for(let char of str){
            if(char === '#'){
                res.push(word)
                word =''
            }else{
                word +=char
            }
        }
        
            res.push(word)
        
        return res
    }
}
