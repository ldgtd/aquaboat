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
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _build_html_select = __webpack_require__(1);
	
	var _build_html_select2 = _interopRequireDefault(_build_html_select);
	
	var _form = __webpack_require__(2);
	
	var _form2 = _interopRequireDefault(_form);
	
	var _google_map = __webpack_require__(6);
	
	var _google_map2 = _interopRequireDefault(_google_map);
	
	var _nav = __webpack_require__(7);
	
	var _nav2 = _interopRequireDefault(_nav);
	
	var _tile = __webpack_require__(8);
	
	var _tile2 = _interopRequireDefault(_tile);
	
	var _filter = __webpack_require__(9);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	document.addEventListener('DOMContentLoaded', function () {
	  new _nav2.default();
	  new _tile2.default();
	
	  if (document.querySelector('body').classList.contains('contact')) {
	    new _form2.default();
	    new _google_map2.default();
	  }
	
	  if (document.querySelector('body').classList.contains('boat')) {
	    new _filter2.default();
	    new _build_html_select2.default();
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var buildHtmlSelect = function () {
	  function buildHtmlSelect() {
	    _classCallCheck(this, buildHtmlSelect);
	
	    var boatEngine = document.querySelectorAll('#boat-engine .boat-engine__data');
	    this.buildArray(boatEngine);
	  }
	
	  _createClass(buildHtmlSelect, [{
	    key: 'buildArray',
	    value: function buildArray(node) {
	      var array = [];
	
	      for (var i = 0; i < node.length; i++) {
	        array.push(node[i].dataset.contains);
	      }
	
	      this.buildUniqArray(array);
	    }
	  }, {
	    key: 'buildUniqArray',
	    value: function buildUniqArray(array) {
	      var i = void 0,
	          ouput = [],
	          object = {};
	
	      for (i = 0; i < array.length; i++) {
	        object[array[i]] = 0;
	      }
	
	      for (i in object) {
	        ouput.push(i);
	      }
	
	      this.buildHtmlOuput(ouput);
	    }
	  }, {
	    key: 'buildHtmlOuput',
	    value: function buildHtmlOuput(output) {
	      for (var i = 0; i < output.length; i++) {
	        var liElement = document.createElement('option'),
	            liConent = document.createTextNode(output[i]);
	
	        liElement.appendChild(liConent);
	        document.querySelector('#boat-engine select').appendChild(liElement);
	      }
	    }
	  }]);
	
	  return buildHtmlSelect;
	}();
	
	exports.default = buildHtmlSelect;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAjax = __webpack_require__(3);
	
	var _simpleAjax2 = _interopRequireDefault(_simpleAjax);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Form = function () {
	  function Form() {
	    _classCallCheck(this, Form);
	
	    document.querySelector('form[name="form"]').addEventListener('submit', this.sendFrom.bind(this));
	  }
	
	  /**
	   * sending contact form throught Formspree
	   */
	
	
	  _createClass(Form, [{
	    key: 'sendFrom',
	    value: function sendFrom(e) {
	      e.preventDefault();
	
	      var name = document.querySelector('#name').value,
	          email = document.querySelector('#email').value,
	          subject = document.querySelector('#subject').value,
	          message = document.querySelector('#message').value;
	
	      var ajax = new _simpleAjax2.default({
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
	
	      ajax.on('success', function () {
	        document.querySelector('.contact__message--success').classList.toggle('hidden');
	        document.querySelector('form[name="form"]').reset();
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

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var EventEmitter = __webpack_require__(4).EventEmitter,
	    queryString = __webpack_require__(5);
	
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


/***/ },
/* 4 */
/***/ function(module, exports) {

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


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

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


/***/ },
/* 6 */
/***/ function(module, exports) {

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

/***/ },
/* 7 */
/***/ function(module, exports) {

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

/***/ },
/* 8 */
/***/ function(module, exports) {

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

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Filter = function Filter() {
	  _classCallCheck(this, Filter);
	
	  console.log('Filter');
	};
	
	exports.default = Filter;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map