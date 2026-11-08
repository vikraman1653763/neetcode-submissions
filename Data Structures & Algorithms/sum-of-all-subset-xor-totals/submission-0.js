class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    subsetXORSum(nums) {

     let sum = 0;

    function backtrack(index, xor) {

        if (index === nums.length) {
            sum += xor;
            return;
        }

backtrack(index + 1, xor ^ nums[index]);
        backtrack(index+1,xor)

    }

    backtrack(0, 0);

    return sum;
};
}
