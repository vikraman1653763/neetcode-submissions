class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
        if(this.minStack.length === 0){
            this.minStack.push(val)
        }else{
            const mins = Math.min(val,this.minStack[this.minStack.length-1])
            this.minStack.push(mins)        
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
        this.minStack.pop()
        
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];

    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];

    }
}
