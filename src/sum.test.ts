import sum from "./sum";

describe("sum()", () => {
  it("returns 5", () => {
    expect(sum(1)(2)(2)()).toBe(5);
  });

  it("returns 7", () => {
    expect(sum(4)(3)()).toBe(7);
  });

  it("returns 0", () => {
    expect(sum()).toBe(0);
  });
});
