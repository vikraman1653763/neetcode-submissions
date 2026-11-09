class Solution {
    /**
     * @param {number} n
     * @param {number[][]} trust
     * @return {number}
     */
    findJudge(n, trust) {
        let a = new Array(n+1).fill(0)
        let b = new Array(n+1).fill(0)
       
       for(let i =0;i<trust.length;i++){
            a[trust[i][0]]++
            b[trust[i][1]]++
       }
        for(let i =1;i<a.length;i++){
            if(a[i] === 0 && b[i] === n-1 ){
                return i
            }
        }
        return -1
    }
}
