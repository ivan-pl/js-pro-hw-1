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
});
