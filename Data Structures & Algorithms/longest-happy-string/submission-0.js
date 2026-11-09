class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @param {number} c
     * @return {string}
     */
    longestDiverseString(a, b, c) {
        let seq = 0;
        let str = "";
        let cur = null;

        const add = (ch) => {
            str += ch;

            if (cur === ch) {
                seq++;
            } else {
                cur = ch;
                seq = 1;
            }

            if (ch === "a") a--;
            else if (ch === "b") b--;
            else c--;
        };

        const check=(ch)=>{
            if(cur === ch && seq ===2){
                if(ch === 'a'){
                    if(b>=c && b>0){
                        add('b')
                    }else if(c>0){
                        add('c')
                    }else{
                        return false
                    }
                    return true
                }else if(ch === 'b'){
                    if(a>=c && a>0){
                        add('a')
                    }else if(c>0){
                        add('c')
                    }else{
                        return false
                    }
                    return true
                }else if(ch === 'c'){
                    if(a>=b && a>0){
                        add('a')
                    }else if(b>0){
                        add('b')
                    }else{
                        return false
                    }
                    return true
                }else{
                    return false
                }
                
            }else{
                add(ch)
                return true
            }
        }

        while (a + b + c > 0) {
            if (a >= b && a >= c) {
                 if (!check('a')) break;
            } else if (b >= a && b >= c) {
                if (!check('b')) break;
            } else {
                 if (!check('c')) break;
            }
        }
        return str;
    }
}
