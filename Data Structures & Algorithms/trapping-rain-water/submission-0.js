class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l = 0;
        let r = height.length - 1;

        let leftMax = 0;
        let rightMax = 0;
      
        let leftTrap = 0
        let rightTrap = 0
        while(l<r){
            if(height[l]<=height[r]){

            if (height[l] >= leftMax){
                leftMax = height[l] 
            }else{
                leftTrap+=leftMax-height[l]
            }
            l++
            }else{

            if (height[r] >= rightMax){
                rightMax = height[r] 
            }else{
                rightTrap+=rightMax-height[r]
            }
            r--
            }
        }
        return leftTrap+rightTrap
    }
}
