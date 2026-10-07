class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {

        let maxPiles = Math.max(...piles)
        
        for (let i = 1; i <= maxPiles; i++) {
            let temp = 0;

            for (let j = 0;j<piles.length;j++) {
                temp += Math.ceil(piles[j]/ i);
               
            }
            if(temp<=h){
            return i ;
            }
        }
    }
}
