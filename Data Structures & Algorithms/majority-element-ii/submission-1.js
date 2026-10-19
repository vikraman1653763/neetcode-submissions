class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let cad1 = null
        let cad2 = null

        let count1 = 0
        let count2 = 0

        for(let n of nums){
            if(cad1 ===n){
                count1++
            }else if (cad2 === n){
                count2++
            }else if(count1 ===0){
                cad1 = n
                count1=1
            }else if(count2 ===0){
                cad2 =n
                count2 = 1
            }else{
                count1--
                count2--
            }
        }

        count1=0
        count2=0
        for(let n of nums){
            if(n === cad1){
                count1++
            }
            if(n === cad2){
                count2++
            }
        }

        let th = Math.floor(nums.length/3)
        let res =[]

        if(count1>th){
            res.push(cad1)
        }
        if(count2>th){
            res.push(cad2)
        }
        return res
    }
}
