class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length) {
            return "";
        }
        

        let freq = {};
        let res = "";
        let l = 0;

        let t_freq = {};
        for (let char of t) {
            t_freq[char] = (t_freq[char] || 0) + 1;
        }

        for (let r = 0; r < s.length; r++) {
            freq[s[r]] = (freq[s[r]] || 0) + 1;
            let match = true;
            for (let k of Object.keys(t_freq)) {
                if ((freq[k]||0) < t_freq[k]) {
                    match = false;
                    break
                }
            }
            while (match) {
            let window = s.slice(l, r + 1);
                if (res === "" || window.length < res.length) {
                    res = window;
                }
                if (s[l] in t_freq) {
                    freq[s[l]] = freq[s[l]] - 1;
                    if (freq[s[l]] < t_freq[s[l]]) {
                        match = false;
                    }
                }
                    l++;
            }
        }
        return res
    }
}
