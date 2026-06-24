/**
 * percentage
 * @param value
 * @param total
 * @param decimals
 */
export function percentage(value: number, total: number, decimals: number = 2): number {
  if (total === 0) throw new Error("Total cannot be zero");
  return Math.round((value / total) * 100 * Math.pow(10, decimals)) / Math.pow(10, decimals);
}
