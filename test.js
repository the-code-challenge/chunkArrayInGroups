const chunkArrayInGroups = require('./index.js')
const assert = require('assert')

describe('ChallengeTemplate', () => {

    /**
     * TEST 1
     */
    it('Test1', () => {

        let result = chunkArrayInGroups(["a", "b", "c", "d"], 2)
        let expected = [ ["a", "b"], ["c", "d"] ]

        assert.strictEqual(result,expected)
    })

    /**
     * TEST 2
     */
    it('Test2', () => {
        let result = chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)
        let expected = [ [0, 1, 2], [3, 4, 5] ]

        assert.strictEqual(result,expected)
    })

    /**
     * TEST 3
     */
    it('Test3', () => {
        let result = chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)
        let expected = [ [0, 1, 2, 3], [4, 5] ]

        assert.strictEqual(result,expected)
    })

    /**
     * TEST 4
     */
    it('Test4', () => {
        let result = chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)
        let expected = [ [0, 1, 2, 3], [4, 5, 6, 7], [8] ]

        assert.strictEqual(result,expected)
    })

})
