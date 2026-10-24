class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {

        let res = 0

        let i =0
        let j =0
        let temp = 0
        while(j<arr.length){
            temp+=arr[j]

            if(j-i+1 === k){
                let avg = temp/k
                if(avg>=threshold){
                    res++
                }
                temp -=arr[i]
                i++
            }
            j++
        }
        return res
    }
}
