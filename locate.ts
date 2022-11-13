/**
 * Locate a certain index in a string.
 * ```ts
 * const template =
 * `xue hua piao piao
 * bei feng xiao xiao`
 *
 * console.log(locate(template, 21))
 * // { line: 1, column: 2 }
 */
export function locate(
  template: string,
  index: number,
): { line: number; column: number } {
  const res = {
    line: 0,
    column: 0,
  };
  let i = 0;
  while (i < index) {
    if (/\n/.test(template[i])) {
      res.line += 1;
      res.column = 0;
    } else {
      res.column += 1;
    }
    i += 1;
  }
  return res;
}
