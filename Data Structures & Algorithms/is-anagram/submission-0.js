class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let map = new Map()
        if (s.length !== t.length){
            return false
        }
        for(let i=0;i<s.length;i++){
            map.set(s[i], (map.get(s[i])||0) + 1)
        }
        for(let j=0;j<t.length;j++){
            if(!map.has(t[j]) || map.get(t[j])<1 ){
                return false
            }
            map.set(t[j],map.get(t[j])-1)
        }
       return true
    }
}
