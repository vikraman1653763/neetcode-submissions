class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let total = Infinity;
        let res = piles[0]
        piles.sort((a, b) => a - b);
        for (let i = 0; i < piles.length; i++) {
            let temp = 0;
            let c = piles[i];
            for (let num of piles) {
                temp += Math.ceil(num / c);
            }
                console.log(temp)
            if (temp<=h && total > temp ) {
                 total = temp
                    return piles[i]
            }
            
        }
        return total;
    }
}
