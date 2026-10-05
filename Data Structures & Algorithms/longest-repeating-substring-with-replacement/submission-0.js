class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let freq = {};
        let left = 0;
        let result = 0;
        for (let right = 0; right < s.length; right++) {
            freq[s[right]] = (freq[s[right]] || 0) + 1;
            let window = right - left + 1;
            let max = Math.max(...Object.values(freq));
            if (window - max <= k) {
                result = Math.max(window, result);
            } else {
                freq[s[right]] = freq[s[right]] - 1;
            left++;
            }
        }
        return result
    }
}
