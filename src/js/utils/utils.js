/**
 * Utils
 */
export class Utils {
  /**
   * Validate email
   * @param email
   * @returns {boolean}
   */
  static validateEmail(email) {
    const regExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return regExp.test(email);
  }

  /**
   * Make first letter in Uppercase
   * @param string
   * @returns {string}
   */
  static firstToUpper(string) {
    return string[0].toUpperCase() + string.substring(1);
  }
}
