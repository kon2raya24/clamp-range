/**
 * clamp
 * @param value
 * @param min
 * @param max
 */
export function clamp(value: number, min: number, max: number): number {
  if (min > max) throw new Error("min must be <= max");
  return Math.min(Math.max(value, min), max);
}
