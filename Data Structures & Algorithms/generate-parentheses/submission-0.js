class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let res =[]
        const bt=(s,o,c)=>{
            if(o===n && c === n){
                return res.push(s)
            }
             if (o<n) {
            bt(s + "(", o + 1, c);
        }

        if (c<o && c<n) {
            bt(s + ")", o, c + 1);
        }
        }

        bt('',0,0)
        return res
    }
}
