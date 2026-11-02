class PrefixTree {
    constructor() {
        this.object = []
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        this.object.push(word)
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this.object.includes(word)
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
       
    return this.object.some(word => word.startsWith(prefix));

    }
}
