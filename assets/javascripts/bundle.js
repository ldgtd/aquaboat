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
	
	var _nav = __webpack_require__(1);
	
	var _nav2 = _interopRequireDefault(_nav);
	
	var _tile = __webpack_require__(2);
	
	var _tile2 = _interopRequireDefault(_tile);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	document.addEventListener('DOMContentLoaded', function () {
	  new _nav2.default();
	  new _tile2.default();
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
	
	var Nav = function () {
	  function Nav() {
	    _classCallCheck(this, Nav);
	
	    // Toggle desktop active item
	    // document.querySelectorAll('.nav-item__primary').addEventListener('click', this.toggleActiveItem.bind(this));
	
	    // Toggle desktop subnav
	    var nodeParent = document.querySelector('.js-toggle-subnav');
	    nodeParent.addEventListener('mouseover', this.toggleSubnav);
	    nodeParent.addEventListener('mouseout', this.toggleSubnav);
	
	    // Toggle mobile nav
	    document.querySelector('.hamburger').addEventListener('click', this.toggleMobileNav.bind(this));
	  }
	
	  _createClass(Nav, [{
	    key: 'toggleActiveItem',
	    value: function toggleActiveItem(nodes) {
	      for (var i = 0; i < nodes.length; i++) {
	        console.log(nodes[i]);
	      }
	      // node.currentTarget.classList.toggle('active');
	    }
	  }, {
	    key: 'toggleSubnav',
	    value: function toggleSubnav() {
	      document.querySelector('.nav__sublist').classList.toggle('hidden');
	    }
	  }, {
	    key: 'toggleMobileNav',
	    value: function toggleMobileNav(node) {
	      node.currentTarget.classList.toggle('is-active');
	    }
	  }]);
	
	  return Nav;
	}();
	
	exports.default = Nav;

/***/ },
/* 2 */
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

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map