import { describe, it, expect } from "vitest";
import { randomInt } from "../randomint";

describe("randomInt", () => {
  it("should be a function", () => {
    expect(typeof randomInt).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => randomInt(null as any)).toThrow();
  });
});
