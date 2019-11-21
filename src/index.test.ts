import { thing } from '.';

test("thing() returns x > 3", () => {
    expect(thing(2)).toBe(false);
    expect(thing(3)).toBe(false);
    expect(thing(4)).toBe(true);
});
