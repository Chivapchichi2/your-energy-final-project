import { Utils } from './utils/utils.js';
import { Messages } from './service/messages.js';
import apiManager from './service/apiManager.js';

class Footer {
  static init() {
    const submitBtn = document.querySelector('.footer-submit-btn');
    submitBtn.addEventListener('click', this.submitButtonHandler);
  }

  static submitButtonHandler(evt) {
    evt.preventDefault();
    let emailInput = document.querySelector('.footer-form-input');
    const isEmailValid = Utils.validateEmail(emailInput.value.trim());
    console.log('emailIsValid:', isEmailValid);
    if (!isEmailValid) {
      Messages.error('Email is not valid');
      return;
    }
    apiManager.subscribe(emailInput.value.trim());
    emailInput.value = '';
  }
}

Footer.init();
