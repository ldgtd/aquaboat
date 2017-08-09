/*----------------------------------------*\
  MODAL
  Handle behavior for a modal element.
  The modal should exists in the DOM before your instantiate it.
\*----------------------------------------*/

const DEFAULT_OPTIONS = {
  onShow: () => {},
  onHide: () => {},
  onHidden: () => {},
};

export default class Modal {

  constructor(el, options) {
    if (typeof el === 'string') {
      this._el = el;
      this._modal = document.querySelector(this._el);
    } else if (el instanceof Element) {
      this._modal = el;
      this._el = `#${this._modal.id}`;
    } else {
      return;
    }

    this._options = Object.assign({}, DEFAULT_OPTIONS, options);
    this._triggers = [...document.querySelectorAll(`[data-toggle="modal"][data-target="${this._el}"]`)];
    this._active = this._modal.classList.contains('active');

    this._handleOverlayClick = this._handleOverlayClick.bind(this);
    this._handleEscKey = this._handleEscKey.bind(this);
    this.toggle = this.toggle.bind(this);
    this.hide = this.hide.bind(this);

    if (this._active) {
      this._preventScroll();
      this._modal.addEventListener('click', this._handleOverlayClick);
      document.addEventListener('keyup', this._handleEscKey);
    }

    this._addEventListeners();
  }

  _addEventListeners() {
    this._triggers.forEach(trigger => {
      trigger.addEventListener('click', this.toggle);
    });
  }

  _removeEventListeners() {
    this._triggers.forEach(trigger => {
      trigger.removeEventListener('click', this.toggle);
    });
  }

  _handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
      this.hide();
    }
  }

  /**
   * ESC key closes the modal
   */
  _handleEscKey(e) {
    if (e.keyCode === 27) {
      this.hide();
    }
  }

  /**
   * Prevent window from scrolling while the modal is open
   */
  _preventScroll() {
    document.body.style.overflow = 'hidden';
  }

  /**
   * Let the window scroll again
   */
  _letScroll() {
    document.body.style.overflow = null;
  }

  /**
   * Autofocus potential interesting elements in the modal
   */
  _autofocus() {
    const interest = this._modal.querySelector('input:not([type="hidden"]), .modal__footer .btn');
    if (interest) {
      interest.focus();
    }
  }

  /*----------------------------------------*\
    PUBLIC
  \*----------------------------------------*/

  toggle(e) {
    e.preventDefault();
    this._active ? this.hide() : this.show();
  }

  /**
   * Show the modal
   */
  show() {
    this._preventScroll();
    this._modal.classList.add('entering');
    this._modal.addEventListener('click', this._handleOverlayClick);
    document.addEventListener('keyup', this._handleEscKey);

    const onEnteringEnd = () => {
      this._modal.classList.remove('entering');
      this._modal.removeEventListener('transitionend', onEnteringEnd);
    };

    setTimeout(() => {
      this._modal.addEventListener('transitionend', onEnteringEnd);
      this._modal.classList.add('active');
    }, 0);

    this._autofocus();
    this._active = true;
    this._options.onShow.call(this, this._modal);
  }

  /**
   * Hide the modal
   */
  hide() {
    this._letScroll();
    this._modal.classList.add('leaving');
    this._modal.removeEventListener('click', this._handleOverlayClick);
    document.removeEventListener('keyup', this._handleEscKey);

    const onLeavingEnd = () => {
      this._modal.classList.remove('leaving');
      this._modal.removeEventListener('transitionend', onLeavingEnd);
      this._options.onHidden.call(this, this._modal);
    };

    setTimeout(() => {
      this._modal.addEventListener('transitionend', onLeavingEnd);
      this._modal.classList.remove('active');
    }, 0);

    this._active = false;
    this._options.onHide.call(this, this._modal);
  }

  destroy(removeDOM = false) {
    if (this._active) {
      /* eslint-disable no-console */
      return console.warn('You can’t destroy a visible modal, hide it first.');
    }
    this._removeEventListeners();
    if (removeDOM) {
      this._modal.parentElement.removeChild(this._modal);
    }
  }

}
