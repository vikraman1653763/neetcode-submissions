class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let res =[]

        const bt =(idx,subset)=>{
            if (idx === nums.length) {
    res.push([...subset]);
    return;
}
           
            bt(idx+1,[...subset,nums[idx]])
            bt(idx+1,subset)
        }
        bt(0,[])
        return res 
    }
}
