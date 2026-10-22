class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        let stack =[]

        for (let num of asteroids){
            let alive = true

            if (stack.length>0){

                while(stack && stack[stack.length-1]>0 && num<0){
                    
                    if(stack[stack.length-1] === -1*num){
                        stack.pop()
                        alive =false
                        break
                    }else{
                        if(stack[stack.length-1] <-1*num){
                            stack.pop()
                        }else{
                            alive = false
                            break
                        }
                    }
                }
            }
            if (alive){
                stack.push(num)
            }

        }
        return stack
    }
}
