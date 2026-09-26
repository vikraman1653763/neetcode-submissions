class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = new Map()
        for(let num of nums){
            count.set(num,(count.get(num)||0)+1)
        }
        let bucket=[]
        for(const[k,v] of count){
            if(!bucket[v]){
             bucket[v]=[]   
            }
            bucket[v].push(k)
        }
        let res =[]
        for(let i = bucket.length-1;i>=0;i--){
            for(let j = 0;j<bucket[i].length;j++){
                console.log(bucket[i])
                res.push(bucket[i][j])
                if(res.length === k){
                    return res
                }
            }
        }
        return res
    }
}
