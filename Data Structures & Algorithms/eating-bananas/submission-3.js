class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);
        const bi = (l, r) => {
            while (l <= r) {
                let mid = Math.floor((l + r) / 2);
                let hours = 0;

                for (let j = 0; j < piles.length; j++) {
                    hours += Math.ceil(piles[j] / mid);
                }

                if (hours <= h) {
                    return bi(l,mid-1)
                }else{
                    return bi(mid+1,r)
                }
            }
            return l
        };
        return bi(l,r)
    }
}
