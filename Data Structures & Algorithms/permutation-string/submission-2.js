class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let k = s1.length;
        let s1Freq = {};
        for (let i = 0; i < s1.length; i++) {
            s1Freq[s1[i]] = (s1Freq[s1[i]] || 0) + 1;
        }
        let windowFreq = {};
        let left = 0;
        for (let right = 0; right < s2.length; right++) {
            windowFreq[s2[right]] = (windowFreq[s2[right]] || 0) + 1;
            if (right - left + 1 === k) {
                let match = true;
                for (let k of Object.keys(s1Freq)) {
                    if (s1Freq[k] !== windowFreq[k]) {
                        match = false;
                    }
                }
                if (match) {
                    return true;
                }
                windowFreq[s2[left]] = windowFreq[s2[left]] - 1;
                left++;
            }
        }
        return false;
    }
}
