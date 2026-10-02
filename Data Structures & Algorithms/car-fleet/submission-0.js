class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(tar, pos, spd) {
        let indices = pos.map((_,i)=>i)
        indices.sort((b,a)=>pos[a]-pos[b])
        
        let srtPos = indices.map(i=>pos[i])
        let srtSpd = indices.map(i=>spd[i])
        
        let fleet = 0
        let prev = 0
        for(let i =0;i<srtPos.length;i++){

            let timeTaken = (tar - srtPos[i])/srtSpd[i]
            
            if(timeTaken>prev){
                fleet++
                prev = timeTaken
            }
        
        }
        return fleet

    }
}
