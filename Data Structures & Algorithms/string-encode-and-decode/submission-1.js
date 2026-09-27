class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res =''
        for(let str of strs){
            let adder = str.length+"#"
            
                res+=adder+str
            
        }
        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res =[]
        let word =''
        let len = 0
        let i = 0
       while(i<str.length){
        let char = str[i]
        while(char >= '0' && char<='9'){
            len=len*10+Number(char)
            i++
            char = str[i]
        }
        if(char === '#'){
            i++
            char = str[i]
        while(len>0){
            word +=char
            len--
            i++
            char =str[i]
        }
         res.push(word)
         word=''
        }
    
       }
        
        return res
    }
}
