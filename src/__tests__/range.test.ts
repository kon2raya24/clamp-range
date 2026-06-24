import { describe, it, expect } from "vitest";
import { range } from "../range";

describe("range", () => {
  it("should be a function", () => {
    expect(typeof range).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => range(null as any)).toThrow();
  });
});
