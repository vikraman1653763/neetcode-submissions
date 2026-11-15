class Solution {
    /**
     * @param {character[]} chars
     * @return {number}
     */
    compress(chars) {
        let res =''
        let i=0
        let j=0
        let current = null
        let count = 0
        while(j<chars.length){
            if(chars[j]!==current){
                res+=current+count
                current = chars[j]
            }else{
                count++


















                
            }
        }
    }
}
