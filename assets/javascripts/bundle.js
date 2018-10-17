/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _build_html_select = __webpack_require__(1);
	
	var _build_html_select2 = _interopRequireDefault(_build_html_select);
	
	var _fix_position = __webpack_require__(2);
	
	var _fix_position2 = _interopRequireDefault(_fix_position);
	
	var _modal = __webpack_require__(3);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	var _form = __webpack_require__(4);
	
	var _form2 = _interopRequireDefault(_form);
	
	var _google_map = __webpack_require__(8);
	
	var _google_map2 = _interopRequireDefault(_google_map);
	
	var _nav = __webpack_require__(9);
	
	var _nav2 = _interopRequireDefault(_nav);
	
	var _tile = __webpack_require__(10);
	
	var _tile2 = _interopRequireDefault(_tile);
	
	var _results_filter = __webpack_require__(11);
	
	var _results_filter2 = _interopRequireDefault(_results_filter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	document.addEventListener('DOMContentLoaded', function () {
	  new _nav2.default();
	  new _tile2.default();
	
	  if (document.querySelector('body').classList.contains('home')) {
	    new _modal2.default('#modal-hivernage');
	    new _form2.default();
	  }
	
	  if (document.querySelector('body').classList.contains('shipyard')) {
	    new _modal2.default('#modal-hivernage');
	    new _form2.default();
	  }
	
	  if (document.querySelector('body').classList.contains('contact')) {
	    new _form2.default();
	    new _google_map2.default();
	  }
	
	  if (document.querySelector('body').classList.contains('boat')) {
	    new _fix_position2.default();
	    new _build_html_select2.default(document.querySelectorAll('#boat-engine .boat-engine__data'), document.querySelector('#boat-engine select'));
	    new _build_html_select2.default(document.querySelectorAll('#boat-boat .boat-boat__data'), document.querySelector('#boat-boat select'));
	  }
	
	  if (document.querySelector('body').classList.contains('results')) {
	    new _results_filter2.default();
	  }
	});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var buildHtmlSelect = function () {
	  function buildHtmlSelect(data, target) {
	    _classCallCheck(this, buildHtmlSelect);
	
	    var boatEngine = data;
	    this.buildArray(boatEngine, target);
	  }
	
	  _createClass(buildHtmlSelect, [{
	    key: 'buildArray',
	    value: function buildArray(node, target) {
	      var array = [];
	
	      for (var i = 0; i < node.length; i++) {
	        array.push(node[i].dataset.contains);
	      }
	
	      this.buildUniqArray(array, target);
	    }
	  }, {
	    key: 'buildUniqArray',
	    value: function buildUniqArray(array, target) {
	      var i = void 0,
	          output = [],
	          object = {};
	
	      for (i = 0; i < array.length; i++) {
	        object[array[i]] = 0;
	      }
	
	      for (i in object) {
	        output.push(i);
	      }
	
	      this.buildHtmlOutput(output, target);
	    }
	  }, {
	    key: 'buildHtmlOutput',
	    value: function buildHtmlOutput(output, target) {
	      for (var i = 0; i < output.length; i++) {
	        var liElement = document.createElement('option'),
	            liContent = document.createTextNode(output[i]);
	
	        liElement.appendChild(liContent);
	        target.appendChild(liElement);
	      }
	    }
	  }]);
	
	  return buildHtmlSelect;
	}();
	
	exports.default = buildHtmlSelect;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var FixPosition = function FixPosition() {
	  _classCallCheck(this, FixPosition);
	
	  var timeout;
	  var node = document.querySelector('.boat-sidebar');
	
	  if (window.matchMedia('(min-width: 769px)').matches) {
	    window.addEventListener('scroll', function () {
	      if (timeout) clearTimeout(timeout);
	      timeout = setTimeout(function () {
	        if (window.scrollY > 450) {
	          node.classList.add('fixed');
	        } else {
	          node.classList.remove('fixed');
	        }
	      }, 0);
	    });
	  }
	};
	
	exports.default = FixPosition;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/*----------------------------------------*\
	  MODAL
	  Handle behavior for a modal element.
	  The modal should exists in the DOM before your instantiate it.
	\*----------------------------------------*/
	
	var DEFAULT_OPTIONS = {
	  onShow: function onShow() {},
	  onHide: function onHide() {},
	  onHidden: function onHidden() {}
	};
	
	var Modal = function () {
	  function Modal(el, options) {
	    _classCallCheck(this, Modal);
	
	    if (typeof el === 'string') {
	      this._el = el;
	      this._modal = document.querySelector(this._el);
	    } else if (el instanceof Element) {
	      this._modal = el;
	      this._el = '#' + this._modal.id;
	    } else {
	      return;
	    }
	
	    this._options = Object.assign({}, DEFAULT_OPTIONS, options);
	    this._triggers = [].concat(_toConsumableArray(document.querySelectorAll('[data-toggle="modal"][data-target="' + this._el + '"]')));
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
	
	  _createClass(Modal, [{
	    key: '_addEventListeners',
	    value: function _addEventListeners() {
	      var _this = this;
	
	      this._triggers.forEach(function (trigger) {
	        trigger.addEventListener('click', _this.toggle);
	      });
	    }
	  }, {
	    key: '_removeEventListeners',
	    value: function _removeEventListeners() {
	      var _this2 = this;
	
	      this._triggers.forEach(function (trigger) {
	        trigger.removeEventListener('click', _this2.toggle);
	      });
	    }
	  }, {
	    key: '_handleOverlayClick',
	    value: function _handleOverlayClick(e) {
	      if (e.target === e.currentTarget) {
	        this.hide();
	      }
	    }
	
	    /**
	     * ESC key closes the modal
	     */
	
	  }, {
	    key: '_handleEscKey',
	    value: function _handleEscKey(e) {
	      if (e.keyCode === 27) {
	        this.hide();
	      }
	    }
	
	    /**
	     * Prevent window from scrolling while the modal is open
	     */
	
	  }, {
	    key: '_preventScroll',
	    value: function _preventScroll() {
	      document.body.style.overflow = 'hidden';
	    }
	
	    /**
	     * Let the window scroll again
	     */
	
	  }, {
	    key: '_letScroll',
	    value: function _letScroll() {
	      document.body.style.overflow = null;
	    }
	
	    /**
	     * Autofocus potential interesting elements in the modal
	     */
	
	  }, {
	    key: '_autofocus',
	    value: function _autofocus() {
	      var interest = this._modal.querySelector('input:not([type="hidden"]), .modal__footer .btn');
	      if (interest) {
	        interest.focus();
	      }
	    }
	
	    /*----------------------------------------*\
	      PUBLIC
	    \*----------------------------------------*/
	
	  }, {
	    key: 'toggle',
	    value: function toggle(e) {
	      e.preventDefault();
	      this._active ? this.hide() : this.show();
	    }
	
	    /**
	     * Show the modal
	     */
	
	  }, {
	    key: 'show',
	    value: function show() {
	      var _this3 = this;
	
	      this._preventScroll();
	      this._modal.classList.add('entering');
	      this._modal.addEventListener('click', this._handleOverlayClick);
	      document.addEventListener('keyup', this._handleEscKey);
	
	      var onEnteringEnd = function onEnteringEnd() {
	        _this3._modal.classList.remove('entering');
	        _this3._modal.removeEventListener('transitionend', onEnteringEnd);
	      };
	
	      setTimeout(function () {
	        _this3._modal.addEventListener('transitionend', onEnteringEnd);
	        _this3._modal.classList.add('active');
	      }, 0);
	
	      this._autofocus();
	      this._active = true;
	      this._options.onShow.call(this, this._modal);
	    }
	
	    /**
	     * Hide the modal
	     */
	
	  }, {
	    key: 'hide',
	    value: function hide() {
	      var _this4 = this;
	
	      this._letScroll();
	      this._modal.classList.add('leaving');
	      this._modal.removeEventListener('click', this._handleOverlayClick);
	      document.removeEventListener('keyup', this._handleEscKey);
	
	      var onLeavingEnd = function onLeavingEnd() {
	        _this4._modal.classList.remove('leaving');
	        _this4._modal.removeEventListener('transitionend', onLeavingEnd);
	        _this4._options.onHidden.call(_this4, _this4._modal);
	      };
	
	      setTimeout(function () {
	        _this4._modal.addEventListener('transitionend', onLeavingEnd);
	        _this4._modal.classList.remove('active');
	      }, 0);
	
	      this._active = false;
	      this._options.onHide.call(this, this._modal);
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      var removeDOM = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	
	      if (this._active) {
	        /* eslint-disable no-console */
	        return console.warn('You can’t destroy a visible modal, hide it first.');
	      }
	      this._removeEventListeners();
	      if (removeDOM) {
	        this._modal.parentElement.removeChild(this._modal);
	      }
	    }
	  }]);
	
	  return Modal;
	}();
	
	exports.default = Modal;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAjax = __webpack_require__(5);
	
	var _simpleAjax2 = _interopRequireDefault(_simpleAjax);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Form = function () {
	  function Form() {
	    _classCallCheck(this, Form);
	
	    if (document.querySelector('body').classList.contains('contact')) {
	      document.querySelector('form[name="contact"]').addEventListener('submit', this.sendFromContact.bind(this));
	    }
	    if (document.querySelector('body').classList.contains('shipyard')) {
	      document.querySelector('form[name="hivernage"]').addEventListener('submit', this.sendFromHivernage.bind(this));
	    }
	    if (document.querySelector('body').classList.contains('home')) {
	      document.querySelector('form[name="hivernage"]').addEventListener('submit', this.sendFromHivernage.bind(this));
	    }
	  }
	
	  /**
	   * sending contact form throught Formspree
	   */
	
	
	  _createClass(Form, [{
	    key: 'sendFromContact',
	    value: function sendFromContact(e) {
	      e.preventDefault();
	
	      var name = document.querySelector('#name').value,
	          email = document.querySelector('#email').value,
	          subject = document.querySelector('#subject').value,
	          message = document.querySelector('#message').value;
	
	      var ajax = new _simpleAjax2.default({
	        url: 'https://formspree.io/matthieu.turmel@aquaboat.ch',
	        method: 'POST',
	        data: {
	          name: name,
	          email: email,
	          subject: subject,
	          message: message
	        },
	        dataType: 'json'
	      });
	
	      ajax.on('success', function () {
	        document.querySelector('.contact__message--success').classList.toggle('hidden');
	        document.querySelector('form[name="contact"]').reset();
	      });
	
	      ajax.on('error', function () {
	        document.querySelector('.contact__message--error').classList.toggle('hidden');
	      });
	
	      ajax.send();
	    }
	
	    /**
	     * sending hivernage form throught Formspree
	     */
	
	  }, {
	    key: 'sendFromHivernage',
	    value: function sendFromHivernage(e) {
	      e.preventDefault();
	
	      var firstname = document.querySelector('#firstname').value,
	          lastname = document.querySelector('#lastname').value,
	          address = document.querySelector('#address').value,
	          city = document.querySelector('#city').value,
	          npa = document.querySelector('#npa').value,
	          phone = document.querySelector('#phone').value,
	          email = document.querySelector('#email').value,
	          brand = document.querySelector('#brand').value,
	          model = document.querySelector('#model').value,
	          immatriculation = document.querySelector('#immatriculation').value,
	          place = document.querySelector('#place').value,
	          port = document.querySelector('#port').value,
	          length = document.querySelector('#length').value,
	          width = document.querySelector('#width').value,
	          engineNumber = document.querySelector('#engine-number').value,
	          hivernageDate = document.querySelector('#hivernage-date').value,
	          waterDate = document.querySelector('#water-date').value,
	          engineType = document.querySelector('#inbord:checked') ? 'Inbord' : 'Outbord',
	          stockage = document.querySelector('#stockage:checked') ? 'on' : 'off',
	          stockageInt = document.querySelector('#stockage-int:checked') ? 'on' : 'off',
	          clean = document.querySelector('#clean:checked') ? 'on' : 'off',
	          engineWinter = document.querySelector('#engine-winter:checked') ? 'on' : 'off',
	          cleanInt = document.querySelector('#clean-int:checked') ? 'on' : 'off',
	          serviceEngine = document.querySelector('#service-engine:checked') ? 'on' : 'off',
	          wc = document.querySelector('#wc:checked') ? 'on' : 'off',
	          protection = document.querySelector('#protection:checked') ? 'on' : 'off',
	          antifoulling = document.querySelector('#antifoulling:checked') ? 'on' : 'off',
	          polish = document.querySelector('#polish:checked') ? 'on' : 'off',
	          cleanBache = document.querySelector('#clean-bache:checked') ? 'on' : 'off',
	          message = document.querySelector('#message').value;
	
	      var ajax = new _simpleAjax2.default({
	        url: 'https://formspree.io/matthieu.turmel@aquaboat.ch',
	        method: 'POST',
	        data: {
	          _subject: 'Inscription hivernage - Aquaboat',
	          _cc: email,
	          'Prenom': firstname,
	          'Nom': lastname,
	          'Adresse': address,
	          'Ville': city,
	          'NPA': npa,
	          'Telephone': phone,
	          'Email': email,
	          'Marque': brand,
	          'Model': model,
	          'Immatriculation': immatriculation,
	          'Place': place,
	          'Port': port,
	          'Longeur': length,
	          'Largeur': width,
	          'Type de moteur ': engineType,
	          'Nombdre de moteur': engineNumber,
	          'Date d\'hivernage': hivernageDate,
	          'Date mise à l\'eau': waterDate,
	          'Stockage du bateau en extérieur': stockage,
	          'Stockage du bateau en intérieur': stockageInt,
	          'Nettoyage intérieur complet': cleanInt,
	          'Nettoyage carène et coque': clean,
	          'Hivernage du moteur': engineWinter,
	          'Hivernage WC, réservoire eau claire / usée': wc,
	          'Service moteur (recommandé)': serviceEngine,
	          'Protection du bateau avec une bâche thermoformée (recommandé)': protection,
	          'Antifoulling (sur-couchage)': antifoulling,
	          'Polish rapide de la coque': polish,
	          'Nettoyage de la bâche': cleanBache,
	          'Autre(s) travaux': message
	        },
	        dataType: 'json'
	      });
	
	      ajax.on('success', function () {
	        document.querySelector('.contact__message--success').classList.toggle('hidden');
	        document.querySelector('form[name="hivernage"]').reset();
	      });
	
	      ajax.on('error', function () {
	        document.querySelector('.contact__message--error').classList.toggle('hidden');
	      });
	
	      ajax.send();
	    }
	  }]);
	
	  return Form;
	}();
	
	exports.default = Form;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	var EventEmitter = __webpack_require__(6).EventEmitter,
	    queryString = __webpack_require__(7);
	
	function tryParseJson(data){
	    try{
	        return JSON.parse(data);
	    }catch(error){
	        return error;
	    }
	}
	
	function timeout(){
	   this.request.abort();
	   this.emit('timeout');
	}
	
	function Ajax(settings){
	    var queryStringData,
	        ajax = this;
	
	    if(typeof settings === 'string'){
	        settings = {
	            url: settings
	        };
	    }
	
	    if(typeof settings !== 'object'){
	        settings = {};
	    }
	
	    ajax.settings = settings;
	    ajax.request = new XMLHttpRequest();
	    ajax.settings.method = ajax.settings.method || 'get';
	
	    if(ajax.settings.cors && !'withCredentials' in ajax.request){
	        if (typeof XDomainRequest !== 'undefined') {
	            // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
	            ajax.request = new XDomainRequest();
	        } else {
	            // Otherwise, CORS is not supported by the browser.
	            ajax.emit('error', new Error('Cors is not supported by this browser'));
	        }
	    }
	
	    if(ajax.settings.cache === false){
	        ajax.settings.data = ajax.settings.data || {};
	        ajax.settings.data._ = new Date().getTime();
	    }
	
	    if(ajax.settings.method.toLowerCase() === 'get' && typeof ajax.settings.data === 'object'){
	        var urlParts = ajax.settings.url.split('?');
	
	        queryStringData = queryString.parse(urlParts[1]);
	
	        for(var key in ajax.settings.data){
	            queryStringData[key] = ajax.settings.data[key];
	        }
	
	        var parsedQueryStringData = queryString.stringify(queryStringData);
	
	        ajax.settings.url = urlParts[0] + (parsedQueryStringData ? '?' + parsedQueryStringData : '');
	        ajax.settings.data = null;
	    }
	
	    ajax.request.addEventListener('progress', function(event){
	        ajax.emit('progress', event);
	    }, false);
	
	    ajax.request.addEventListener('load', function(event){
	        var data = event.target.responseText;
	
	        if(ajax.settings.dataType && ajax.settings.dataType.toLowerCase() === 'json'){
	            if(data === ''){
	                data = undefined;
	            }else{
	                data = tryParseJson(data);
	                if(data instanceof Error){
	                    ajax.emit('error', event, data);
	                    return;
	                }
	            }
	        }
	
	        if(event.target.status >= 400){
	            ajax.emit('error', event, data);
	        } else {
	            ajax.emit('success', event, data);
	        }
	
	    }, false);
	
	    ajax.request.addEventListener('error', function(event){
	        ajax.emit('error', event);
	    }, false);
	
	    ajax.request.addEventListener('abort', function(event){
	        ajax.emit('error', event, new Error('Connection Aborted'));
	        ajax.emit('abort', event);
	    }, false);
	
	    ajax.request.addEventListener('loadend', function(event){
	        clearTimeout(ajax._requestTimeout);
	        ajax.emit('complete', event);
	    }, false);
	
	    ajax.request.open(ajax.settings.method || 'get', ajax.settings.url, true);
	
	    if(ajax.settings.cors && 'withCredentials' in ajax.request) {
	        ajax.request.withCredentials = !!settings.withCredentials;
	    }
	
	    // Set default headers
	    if(ajax.settings.contentType !== false){
	        ajax.request.setRequestHeader('Content-Type', ajax.settings.contentType || 'application/json; charset=utf-8');
	    }
	    if(ajax.settings.requestedWith !== false) {
	        ajax.request.setRequestHeader('X-Requested-With', ajax.settings.requestedWith || 'XMLHttpRequest');
	    }
	    if(ajax.settings.auth){
	        ajax.request.setRequestHeader('Authorization', ajax.settings.auth);
	    }
	
	    // Set custom headers
	    for(var headerKey in ajax.settings.headers){
	        ajax.request.setRequestHeader(headerKey, ajax.settings.headers[headerKey]);
	    }
	
	    if(ajax.settings.processData !== false && ajax.settings.dataType === 'json'){
	        ajax.settings.data = JSON.stringify(ajax.settings.data);
	    }
	}
	
	Ajax.prototype = Object.create(EventEmitter.prototype);
	
	Ajax.prototype.send = function(){
	    var ajax = this;
	
	    ajax._requestTimeout = setTimeout(
	        function(){
	            timeout.apply(ajax, []);
	        },
	        ajax.settings.timeout || 120000
	    );
	
	    ajax.request.send(ajax.settings.data && ajax.settings.data);
	};
	
	module.exports = Ajax;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;
	
	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;
	
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;
	
	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;
	
	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};
	
	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;
	
	  if (!this._events)
	    this._events = {};
	
	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }
	
	  handler = this._events[type];
	
	  if (isUndefined(handler))
	    return false;
	
	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }
	
	  return true;
	};
	
	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events)
	    this._events = {};
	
	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);
	
	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];
	
	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }
	
	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.on = EventEmitter.prototype.addListener;
	
	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  var fired = false;
	
	  function g() {
	    this.removeListener(type, g);
	
	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }
	
	  g.listener = listener;
	  this.on(type, g);
	
	  return this;
	};
	
	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events || !this._events[type])
	    return this;
	
	  list = this._events[type];
	  length = list.length;
	  position = -1;
	
	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	
	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }
	
	    if (position < 0)
	      return this;
	
	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }
	
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;
	
	  if (!this._events)
	    return this;
	
	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }
	
	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }
	
	  listeners = this._events[type];
	
	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];
	
	  return this;
	};
	
	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};
	
	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];
	
	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};
	
	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	
	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
		query-string
		Parse and stringify URL query strings
		https://github.com/sindresorhus/query-string
		by Sindre Sorhus
		MIT License
	*/
	(function () {
		'use strict';
		var queryString = {};
	
		queryString.parse = function (str) {
			if (typeof str !== 'string') {
				return {};
			}
	
			str = str.trim().replace(/^(\?|#)/, '');
	
			if (!str) {
				return {};
			}
	
			return str.trim().split('&').reduce(function (ret, param) {
				var parts = param.replace(/\+/g, ' ').split('=');
				var key = parts[0];
				var val = parts[1];
	
				key = decodeURIComponent(key);
				// missing `=` should be `null`:
				// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
				val = val === undefined ? null : decodeURIComponent(val);
	
				if (!ret.hasOwnProperty(key)) {
					ret[key] = val;
				} else if (Array.isArray(ret[key])) {
					ret[key].push(val);
				} else {
					ret[key] = [ret[key], val];
				}
	
				return ret;
			}, {});
		};
	
		queryString.stringify = function (obj) {
			return obj ? Object.keys(obj).map(function (key) {
				var val = obj[key];
	
				if (Array.isArray(val)) {
					return val.map(function (val2) {
						return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
					}).join('&');
				}
	
				return encodeURIComponent(key) + '=' + encodeURIComponent(val);
			}).join('&') : '';
		};
	
		if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return queryString; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = queryString;
		} else {
			self.queryString = queryString;
		}
	})();


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var GoogleMap = function GoogleMap() {
	  _classCallCheck(this, GoogleMap);
	
	  window.onload = function () {
	    var el = document.getElementById('map');
	    var pos = {
	      lat: parseFloat(el.dataset.lat),
	      lng: parseFloat(el.dataset.lng)
	    };
	
	    el.map = new google.maps.Map(el, {
	      zoom: 14,
	      scrollwheel: false,
	      disableDefaultUI: true,
	      center: pos,
	      styles: [{ 'featureType': 'administrative', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#444444' }] }, { 'featureType': 'landscape', 'elementType': 'all', 'stylers': [{ 'color': '#f2f2f2' }] }, { 'featureType': 'poi', 'elementType': 'all', 'stylers': [{ 'visibility': 'off' }] }, { 'featureType': 'road', 'elementType': 'all', 'stylers': [{ 'saturation': -100 }, { 'lightness': 45 }] }, { 'featureType': 'road.highway', 'elementType': 'all', 'stylers': [{ 'visibility': 'simplified' }] }, { 'featureType': 'road.arterial', 'elementType': 'labels.icon', 'stylers': [{ 'visibility': 'off' }] }, { 'featureType': 'transit', 'elementType': 'all', 'stylers': [{ 'visibility': 'off' }] }, { 'featureType': 'water', 'elementType': 'all', 'stylers': [{ 'color': '#46bcec' }, { 'visibility': 'on' }] }]
	    });
	
	    el.marker = new google.maps.Marker({
	      map: el.map,
	      draggable: false,
	      animation: google.maps.Animation.DROP,
	      position: pos
	    });
	  };
	};
	
	exports.default = GoogleMap;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Nav = function () {
	  function Nav() {
	    _classCallCheck(this, Nav);
	
	    // Toggle desktop subnav
	    var nodeParent = document.querySelector('.js-toggle-subnav');
	    nodeParent.addEventListener('mouseover', this.toggleSubnav);
	    nodeParent.addEventListener('mouseout', this.toggleSubnav);
	
	    // Toggle mobile nav
	    document.querySelector('.hamburger').addEventListener('click', this.toggleMobileNav.bind(this));
	  }
	
	  _createClass(Nav, [{
	    key: 'toggleSubnav',
	    value: function toggleSubnav() {
	      document.querySelector('.nav__sublist').classList.toggle('hidden');
	    }
	  }, {
	    key: 'toggleMobileNav',
	    value: function toggleMobileNav(node) {
	      node.currentTarget.classList.toggle('is-active');
	      document.querySelector('.nav-mobile').classList.toggle('nav-mobile--active');
	      document.querySelector('body').classList.toggle('overflow-hidden');
	    }
	  }]);
	
	  return Nav;
	}();
	
	exports.default = Nav;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Tile = function () {
	  function Tile() {
	    _classCallCheck(this, Tile);
	
	    var triggers = document.querySelectorAll('.tile');
	
	    for (var i = 0; i < triggers.length; i++) {
	      triggers[i].addEventListener('mouseover', this.toggleClassTile.bind(this));
	      triggers[i].addEventListener('mouseout', this.toggleClassTile.bind(this));
	    }
	  }
	
	  _createClass(Tile, [{
	    key: 'toggleClassTile',
	    value: function toggleClassTile(node) {
	      if (node.currentTarget.classList.contains('tile--onhover')) {
	        node.currentTarget.classList.remove('tile--onhover');
	      } else {
	        node.currentTarget.classList.add('tile--onhover');
	      }
	    }
	  }]);
	
	  return Tile;
	}();
	
	exports.default = Tile;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// import { pathParamsToJson } from 'helpers/path_params_to_json';
	
	var ResultsFilter = function () {
	  function ResultsFilter() {
	    _classCallCheck(this, ResultsFilter);
	
	    this.pathParamsToJson(window.location.search);
	  }
	
	  _createClass(ResultsFilter, [{
	    key: 'pathParamsToJson',
	    value: function pathParamsToJson(params) {
	      var hash = void 0,
	          myJson = {},
	          hashes = params.slice(params.indexOf('?') + 1).split('&');
	
	      for (var i = 0; i < hashes.length; i++) {
	        var hashesFormated = hashes[i].replace(/\+/i, ' ');
	        hash = hashesFormated.split('=');
	        myJson[hash[0]] = hash[1];
	      }
	
	      this.toggleTile(myJson);
	    }
	  }, {
	    key: 'toggleTile',
	    value: function toggleTile(filterParams) {
	      var tile = document.querySelectorAll('#tile');
	
	      for (var i = 0; i < tile.length; i++) {
	        // console.log('filter plus petit ' + filterParams.money);
	        // console.log('boat item ' + tile[i].dataset.money);
	
	        if (filterParams.engine != tile[i].dataset.engine) {
	          tile[i].classList.add('hidden');
	        }
	
	        if (filterParams.boat != tile[i].dataset.boat) {
	          tile[i].classList.add('hidden');
	        }
	
	        if (parseInt(filterParams.width) <= tile[i].dataset.width) {
	          tile[i].classList.add('hidden');
	        }
	
	        if (parseInt(filterParams.height) <= tile[i].dataset.height) {
	          tile[i].classList.add('hidden');
	        }
	
	        if (parseInt(filterParams.people) <= tile[i].dataset.people) {
	          tile[i].classList.add('hidden');
	        }
	
	        if (parseInt(filterParams.power) <= tile[i].dataset.power) {
	          tile[i].classList.add('hidden');
	        }
	
	        if (parseInt(filterParams.money) <= tile[i].dataset.money) {
	          tile[i].classList.add('hidden');
	        }
	      }
	
	      this.countResult();
	    }
	  }, {
	    key: 'countResult',
	    value: function countResult() {
	      var count = document.querySelectorAll('#tile:not(.hidden)').length;
	      document.querySelector('#count-results').textContent = count;
	    }
	  }]);
	
	  return ResultsFilter;
	}();
	
	exports.default = ResultsFilter;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map