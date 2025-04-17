// Your tests here
import { pointsForward } from "../utils";

describe("pointsForward", () => {
    it("calculates the total points for a word (i point per vowel, 2 per consonant", () => {
        const word = "test";
        const points = pointsForward(word);
        expect(points).toBe(7);
    })
})