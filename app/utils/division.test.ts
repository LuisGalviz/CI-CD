import { division } from "./division";

test("Test functions that import server-only", () => {
  expect(division(6, 3)).toBe(2);
});
