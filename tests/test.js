const assert = require('chai').assert;
const words = require('../src/main');
 
/*describe("object testing", () => {
    it('Should return an object { hello: 1, world: 1, the: 1, cat: 1, sat: 1, on: 1, a: 1, mat: 1 }', () => {
        const result = words('hello world the cat sat on a mat');
        assert.deepEqual(result,);
    });
}) */

describe("words()", () => {
 it("should check for emptiness", () => {
    const count = "Invalid, input valid words";
    assert.equal(words(""), count);
    });

    it("should check for invalid input", () => {
    const count = "Input must be in strings";
    assert.equal(words(283940), count);
    });


    it("should count a single word", () => {
    const count = { word: 1 };
    assert.equal(JSON.stringify(words("word")), JSON.stringify(count));
    });

    it("should count for multiple words", () => {
    const count = { word: 1, is: 1, food: 1 };
    assert.equal(JSON.stringify(words("word is food")), JSON.stringify(count));
    });

    it("should count a single word", () => {
    const count = { word: 1 };
    assert.equal(JSON.stringify(words("word")), JSON.stringify(count));
    });

    it("should count a single strings", () => {
    const count = "Invalid, input valid words"
    assert.equal(words([]), count);
    });
    
});