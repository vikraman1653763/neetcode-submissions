class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let res =[]

        const bt =(index,sum,comb)=>{
            if(index === nums.length || sum>= target){
                return
            }
            if(sum+nums[index] === target){
                res.push([...comb,nums[index]])
            }
            bt(index,sum+nums[index],[...comb,nums[index]])
            bt(index+1,sum,comb)

        }

        bt(0,0,[])
        return res
    }
}
