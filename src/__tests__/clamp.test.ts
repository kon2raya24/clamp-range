import { describe, it, expect } from "vitest";
import { clamp } from "../clamp";

describe("clamp", () => {
  it("should be a function", () => {
    expect(typeof clamp).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => clamp(null as any)).toThrow();
  });
});
