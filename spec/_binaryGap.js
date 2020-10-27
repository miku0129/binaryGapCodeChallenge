const { solution } = require("../src/binaryGap");
const expect = require('chai').expect

describe('The binary gap function should handle', () => {
    it('example tests', () => {
        expect(solution(1042)).to.equal(5);
        expect(solution(15)).to.equal(0);
        expect(solution(9)).to.equal(2);
        expect(solution(32)).to.equal(0);
    });
});

describe('The binary gap function should handle correctness tests', () => {
    it('extreme values', () => {
        expect(solution(1)).to.equal(0);
        expect(solution(1610612737)).to.equal(28);
    });
    it('trailing zeroes', () => {
        expect(solution(6)).to.equal(0);
        expect(solution(328)).to.equal(2);
    });
    it('power of 2', () => {
        expect(solution(16)).to.equal(0);
        expect(solution(1024)).to.equal(0);
    });
    it('medium test cases', () => {
        expect(solution(51712)).to.equal(2);
        expect(solution(561892)).to.equal(3);
        expect(solution(66561)).to.equal(9);
    });
    it('large test cases', () => {
        expect(solution(6291457)).to.equal(20);
        expect(solution(74901729)).to.equal(4);
        expect(solution(805306373)).to.equal(25);
    });
});