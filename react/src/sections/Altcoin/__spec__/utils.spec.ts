import { x16sCycle } from "../utils";

describe("x16sCycle()", () => {
  it("hashes correctly", () => {
    const hashFront = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

    const lastSixteen = "4f0da52072c99492";
    const expectedOrder = "2035a1c8f4679bde".split("");

    expect(x16sCycle(hashFront + lastSixteen)).toEqual(expectedOrder);
  });
});
