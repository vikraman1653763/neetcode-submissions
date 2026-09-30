class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str =''
        for(let char of s){
            let code = char.charCodeAt(0)
            if((code>=65 && code<=90) || (code>=97 && code<=122) || (code>=48 && code<=57)){
                str+=char
            }
        }
        let i =0
        let j =str.length-1
        while(i<j){
            console.log(str[i],str[j])
            if(str[i].toLowerCase() !== str[j].toLowerCase()){
                return false
            }
            i++
            j--
        }
        return true
    }
}
