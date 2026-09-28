class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let zeros = 0
        for(let num of nums){
            if(num ===0){
                zeros++
            }
        }
        if( zeros>1){
            let res = new Array(nums.length).fill(0)
            return res
        }else if(zeros === 1){
            let pos = 0
            let prod = 1
            for(let i=0;i<nums.length;i++){
                if (nums[i] === 0){
                    pos = i
                }else{
                    prod*=nums[i]
                }
            }
            let res = []
            for(let j=0;j<nums.length;j++){
                if(j === pos){
                    res[j]= prod
                }else{
                    res[j]=0
                }
            }
            return res
        }else{

        let res =[]
        let product = 1
        for(let num of nums){
            product *=num
        }
        for(let num of nums){
            res.push(product/num)
        }
        return res
        }
    }
}
