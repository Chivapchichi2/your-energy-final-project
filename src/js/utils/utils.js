/**
 * Utils
 */
export class Utils {
  static validateEmail(email) {
    const regExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return regExp.test(email);    
  }
}
