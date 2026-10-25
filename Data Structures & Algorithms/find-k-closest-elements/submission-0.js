class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        const nearest = (arr) => {
            let i = 0;
            let j = arr.length - 1;

            while (i <= j) {
                let m = Math.floor((i + j) / 2);

                if (arr[m] === x) {
                    return m;
                } else if (arr[m] < x) {
                    i = m + 1;
                } else {
                    j = m - 1;
                }
            }
            return i;
        };
        let near = nearest(arr);
        let left = near - 1;
        let right = near;
        let res = [];
        while (res.length < k) {
            if (left >= 0 && right < arr.length) {
                if (Math.abs(arr[left] - x) <= Math.abs(arr[right] - x)) {
                    res.push(arr[left]);
                    left--;
                } else {
                    res.push(arr[right]);
                    right++;
                }
            }
            else if (left >= 0) {
                res.push(arr[left]);
                left--;
            }
            else {
                res.push(arr[right]);
                right++;
            }
        }
        return res.sort();
    }
}
