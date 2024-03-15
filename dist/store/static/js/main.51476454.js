/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Using `babel-preset-react-app` requires that you specify `NODE_ENV` or `BABEL_ENV` environment variables. Valid values are \"development\", \"test\", and \"production\". Instead, received: undefined. (While processing preset: \"/Users/smichael/Development/_tutorials/test-babel-loader/node_modules/babel-preset-react-app/index.js\")\n    at create (/Users/smichael/Development/_tutorials/test-babel-loader/node_modules/babel-preset-react-app/create.js:11:11)\n    at Object.<anonymous> (/Users/smichael/Development/_tutorials/test-babel-loader/node_modules/babel-preset-react-app/index.js:19:18)\n    at Module._compile (node:internal/modules/cjs/loader:1376:14)\n    at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)\n    at Module.load (node:internal/modules/cjs/loader:1207:32)\n    at Module._load (node:internal/modules/cjs/loader:1023:12)\n    at Module.require (node:internal/modules/cjs/loader:1235:19)\n    at require (node:internal/modules/helpers:176:18)\n    at /Users/smichael/Development/_tutorials/test-babel-loader/node_modules/babel-core/lib/transformation/file/options/option-manager.js:296:17\n    at Array.map (<anonymous>)\n    at OptionManager.resolvePresets (/Users/smichael/Development/_tutorials/test-babel-loader/node_modules/babel-core/lib/transformation/file/options/option-manager.js:275:20)\n    at OptionManager.mergePresets (/Users/smichael/Development/_tutorials/test-babel-loader/node_modules/babel-core/lib/transformation/file/options/option-manager.js:264:10)\n    at OptionManager.mergeOptions (/Users/smichael/Development/_tutorials/test-babel-loader/node_modules/babel-core/lib/transformation/file/options/option-manager.js:249:14)\n    at OptionManager.init (/Users/smichael/Development/_tutorials/test-babel-loader/node_modules/babel-core/lib/transformation/file/options/option-manager.js:368:12)\n    at File.initOptions (/Users/smichael/Development/_tutorials/test-babel-loader/node_modules/babel-core/lib/transformation/file/index.js:212:65)\n    at new File (/Users/smichael/Development/_tutorials/test-babel-loader/node_modules/babel-core/lib/transformation/file/index.js:135:24)\n    at Pipeline.transform (/Users/smichael/Development/_tutorials/test-babel-loader/node_modules/babel-core/lib/transformation/pipeline.js:46:16)\n    at transpile (/Users/smichael/Development/_tutorials/test-babel-loader/node_modules/babel-loader/lib/index.js:50:20)\n    at module.exports (/Users/smichael/Development/_tutorials/test-babel-loader/node_modules/babel-loader/lib/index.js:173:20)");

/***/ })
/******/ ]);