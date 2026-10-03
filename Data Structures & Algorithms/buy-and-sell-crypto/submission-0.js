class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(pric) {
        let min = pric[0]
        let max = 0
        let res = 0
        for(let i=1;i<pric.length;i++){
            if(pric[i]<min){
                min = pric[i]
                max = 0
            }else{
                max = pric[i]
                res = Math.max(res,max - min)
            }
        }
        return res
    }
}
