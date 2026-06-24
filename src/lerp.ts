
// Type exports for consumers
// Add specific types as needed
/**
 * lerp
 * @param a
 * @param b
 * @param t
 */
export function lerp(a: number, b: number, t: number): number {
  if (a === null || a === undefined) throw new Error("Invalid input");
  return a + (b - a) * clamp(t, 0, 1);
}
