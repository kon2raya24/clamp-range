import { describe, it, expect } from "vitest";
import { lerp } from "../lerp";

describe("lerp", () => {
  it("should be a function", () => {
    expect(typeof lerp).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => lerp(null as any)).toThrow();
  });
});
