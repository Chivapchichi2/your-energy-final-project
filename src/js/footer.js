import { Utils } from './utils/utils.js'
import { Messages } from './service/messages.js';


export class Footer {
  static init() {
    const submitBtn = document.querySelector('.footer-submit-btn');
    submitBtn.addEventListener('click', this.submitButtonHandler);

    const policyBtn = document.querySelector('.footer-policy-btn');
    submitBtn.addEventListener('click', this.submitButtonHandler);

    const termsBtn = document.querySelector('.footer-terms-btn');
    submitBtn.addEventListener('click', this.submitButtonHandler);

   }
  
  static submitButtonHandler(evt) {
    evt.preventDefault();
    let emailInput = document.querySelector('.footer-form-input');
    const isEmailValid = Utils.validateEmail(emailInput.value.trim());
    console.log('emailIsValid:', isEmailValid);
    if (!isEmailValid) {
      Messages.error("Email is not valid");
      return;
    }
    //   // if input is valid  =>  send request
    emailInput.value = "";
  }
}
