class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let max = 0
        let stack =[]
        for(let char of s ){
            if(stack.includes(char)){
                stack.shift()
            }else{
                stack.push(char)
                max = Math.max(max,stack.length)
            }
        }
        return max
    }
}
