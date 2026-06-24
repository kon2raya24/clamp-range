/**
 * lerp
 * @param a
 * @param b
 * @param t
 */
export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * clamp(t, 0, 1);
}
