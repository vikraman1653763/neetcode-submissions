class Solution {
    /**
     * @param {character[]} chars
     * @return {number}
     */
    compress(chars) {
    
        let res = [];
        let j = 1;
        let current = chars[0];
        let count = 1;
        while (j < chars.length) {
            if (chars[j] !== current) {
                    res.push(current);
                if (count > 1) {
                    res.push(...String(count));
                }
                current = chars[j];
                count = 1
            } else {
                count++;
            }
            j++;
        }
        if (count > 0) {
                res.push(current);
            if (count > 1) {
                res.push(...String(count));
            }
        }
        for(let i = 0;i<res.length;i++){
            chars[i] = res[i]
        }
        return res.length
    }
}
