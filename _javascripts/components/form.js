import Ajax from 'simple-ajax';

export default class Form {
  constructor() {
    document.querySelector('form[name="form"]').addEventListener('submit', this.sendFrom.bind(this));
  }

  /**
   * sending contact form throught Formspree
   */
  sendFrom(e) {
    e.preventDefault();

    let name = document.querySelector('#name').value,
        email = document.querySelector('#email').value,
        subject = document.querySelector('#subject').value,
        message = document.querySelector('#message').value;

    var ajax = new Ajax({
      url: 'https://formspree.io/ludodevlab@gmail.com',
      method: 'POST',
      data: {
        name: name,
        email: email,
        subject: subject,
        message: message
      },
      dataType: 'json'
    });

    ajax.send();
    console.log(ajax);
    console.log(ajax.request.status);

    if (ajax.request.status === 200) {
      console.log('success');
    //document.querySelector('contact__message--success').classList.toggle('hidden');
    //document.querySelector('form[name="contact"]').classList.toggle('fadeout');
    } else {
      console.log('error');
    //document.querySelector('contact__message--error').classList.toggle('hidden');
    }
  }
}