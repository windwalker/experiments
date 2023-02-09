/**
 * @public
 */
class DrawHelper {
  /**
   * @public
   *
   * @example
   * Here's a simple example:
   * ```
   * // Prints "2":
   * console.log(add(1,1));
   * ```
   *
   * @example
   * Here's an example with negative numbers:
   * ```
   * // Prints "0":
   * console.log(add(1,-1));
   * ```
   */
  add(a: number, b: number) {
    return a + b;
  }

  /**
   * @internal
   */
  internalMethod() {
    console.log("This should be private and not seen from declaration file");
  }

  /**
   * Method without release tag
   */
  noReleaseTagMethod() {
    console.log("Method without release tag");
  }
}

export default DrawHelper;
