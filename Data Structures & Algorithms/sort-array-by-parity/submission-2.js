class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArrayByParity(nums) {
        let a=[],b=[];
        for(let i of nums){
            if(i%2==0) a.push(i);
            else b.push(i);
        }
        return [...a,...b];
    }
}
