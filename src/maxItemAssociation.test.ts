import maxItemAssociation from "./maxItemAssociation";

describe("maxItemAssociation()", () => {
  it('returns ["a", "b", "c"]', () => {
    expect(
      maxItemAssociation([
        ["a", "b"],
        ["a", "c"],
        ["d", "e"],
      ])
    ).toEqual(["a", "b", "c"]);
  });

  it('returns ["a", "b", "c", "e", "q", "r", "w"]', () => {
    expect(
      maxItemAssociation([
        ["q", "w", "a"],
        ["a", "b"],
        ["a", "c"],
        ["q", "e"],
        ["q", "r"],
      ])
    ).toEqual(["a", "b", "c", "e", "q", "r", "w"]);
  });

  it('returns ["a", "b", "c", "d", "e"]', () => {
    expect(
      maxItemAssociation([
        ["a", "b"],
        ["b", "c", "d"],
        ["a", "c", "d", "e"],
        ["a", "d", "e"],
        ["a", "b", "c"],
        ["a", "b", "c", "d"],
        ["a"],
        ["a", "b", "c"],
        ["a", "b", "d"],
        ["b", "c", "e"],
      ])
    ).toEqual(["a", "b", "c", "d", "e"]);
  });
});
