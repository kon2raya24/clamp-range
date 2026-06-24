
// Type exports for consumers
// Add specific types as needed
/**
 * randomInt
 * @param min
 * @param max
 */
export function randomInt(min: number, max: number): number {
  if (min > max) [min, max] = [max, min];
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
