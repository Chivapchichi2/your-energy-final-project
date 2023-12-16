import iziToast from 'izitoast';
/**
 * baseIziToastConfig
 */
const baseIziToastConfig = {
  timeout: 3000,
  close: false,
  closeOnClick: true,
  icon: null,
  position: 'topRight',
};
/**
 * Messages
 */
export class Messages {
  static success(message) {
    iziToast.success({
      title: 'OK',
      titleColor: 'green',
      message: message,
      messageColor: 'green',

      progressBarColor: 'green',
      ...baseIziToastConfig,
    });
  }
  static error(message) {
    iziToast.error({
      title: 'Error',
      titleColor: 'red',
      message: message,
      messageColor: 'red',
      progressBarColor: 'red',
      ...baseIziToastConfig,
    });
  }
  static warning(message) {
    iziToast.warning({
      title: 'Caution',
      message: message,
      titleColor: 'red',
      messageColor: 'red',
      progressBarColor: 'red',
      ...baseIziToastConfig,
    });
  }
}
