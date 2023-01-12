import sortLists from "./sortLists";

describe("sortLists()", () => {
  it('returns [["a", "b"], ["b", "c"], ["a", "d"]]', () => {
    expect(
      sortLists([
        ["b", "a"],
        ["b", "c"],
        ["d", "a"],
      ])
    ).toEqual([
      ["a", "b"],
      ["b", "c"],
      ["a", "d"],
    ]);
  });

  it('returns [["c", "a", "b"], ["c", "b"], ["c", "a", "d"]]', () => {
    expect(
      sortLists([
        ["b", "a", "c"],
        ["b", "c"],
        ["c", "a", "d"],
      ])
    ).toEqual([
      ["c", "a", "b"],
      ["c", "b"],
      ["c", "a", "d"],
    ]);
  });
});
