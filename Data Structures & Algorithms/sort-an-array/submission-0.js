class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        
        const slice =(arr,a,b)=>{
            let res = []
            let j =0
            for(let i=a;i<b;i++){
                res[j]=arr[i]
                j++
            }
            return res
        }        
        const merge =(nums)=>{
            if(nums.length <=1){
                return nums
            }
            let mid = Math.floor(nums.length/2)

            let left = merge(slice(nums,0,mid))
            let right = merge(slice(nums,mid,nums.length))
            let res = []
            
            let i=0
            let j=0
            while(i<left.length &&j<right.length){
                if(left[i]<right[j]){
                    res.push(left[i])
                    i++
                }else{
                    res.push(right[j])
                    j++
                }
            }
            while(i<left.length){
                res.push(left[i])
                i++
            }
            while(j<right.length){
                res.push(right[j])
                j++
            }
            return res
        }

        return merge(nums)
    }
}
