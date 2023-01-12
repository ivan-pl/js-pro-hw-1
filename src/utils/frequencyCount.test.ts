import frequencyCount from "./frequencyCount";

describe("frequencyCount()", () => {
  it("returns {a: 3, b: 2, c: 2}", () => {
    expect(frequencyCount([["a", "b", "c"], ["a"], ["a", "b"], ["c"]])).toEqual(
      { a: 3, b: 2, c: 2 }
    );
  });

  it("returns {a: 1, b: 3, c: 2, d: 2}", () => {
    expect(
      frequencyCount([["a", "b", "c"], ["b"], ["b", "c", "d"], ["d"]])
    ).toEqual({ a: 1, b: 3, c: 2, d: 2 });
  });
});
