class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArrayByParity(arr) {
        let left = 0,
		right = 0;

	while (right < arr.length) {
		if (arr[right] % 2 == 0) {
			[arr[left], arr[right]] = [arr[right], arr[left]];
			left++;
		}

		right++;
	}

	return arr;
    }
}
