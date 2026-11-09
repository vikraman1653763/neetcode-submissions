class Solution {
    /**
     * @param {number} n
     * @param {number[][]} trust
     * @return {number}
     */
    findJudge(n, trust) {

        let seen =[]
        for(let i = 0;i<=n;i++){
            seen.push(0)
        }

        for(let i = 0;i<trust.length;i++){
            console.log(trust[i][1])
            if(trust[i][1] !== 0){
                seen[trust[i][0]]+=1
            } 
        }
        
        for(let i=1;i<seen.length;i++){
            if(seen[i] === 0){
                return i
            }
        }
        return -1


    }
}
