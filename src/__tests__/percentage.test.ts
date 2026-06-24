import { describe, it, expect } from "vitest";
import { percentage } from "../percentage";

describe("percentage", () => {
  it("should be a function", () => {
    expect(typeof percentage).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => percentage(null as any)).toThrow();
  });
});
