module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_pages_WithTS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/pages/WithTS */ \"./src/pages/WithTS.tsx\");\nvar _jsxFileName = \"/Users/austinroy/Documents/myprojects/react-ts-component-demo/pages/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst TSComponent = () => {\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    href: \"/\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 11\n    }\n  }, \"With TS\"), __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 11\n    }\n  }), __jsx(\"a\", {\n    href: \"/WithoutTS\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 11\n    }\n  }, \"Without TS\"), __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 11\n    }\n  }), __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 11\n    }\n  }), __jsx(_src_pages_WithTS__WEBPACK_IMPORTED_MODULE_1__[\"DisplayWithTS\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 11\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TSComponent);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJUU0NvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLFdBQVcsR0FBRyxNQUFNO0FBQ3RCLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0k7QUFBRyxRQUFJLEVBQUMsWUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhKLEVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLEVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxKLEVBTUksTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkosQ0FERjtBQVVELENBWEg7O0FBYWlCQSwwRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpc3BsYXlXaXRoVFMgfSBmcm9tICcuLi9zcmMvcGFnZXMvV2l0aFRTJ1xuXG5jb25zdCBUU0NvbXBvbmVudCA9ICgpID0+IHtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICAgIDxhIGhyZWY9XCIvXCI+V2l0aCBUUzwvYT5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxhIGhyZWY9XCIvV2l0aG91dFRTXCI+V2l0aG91dCBUUzwvYT5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxici8+XG4gICAgICAgICAgPERpc3BsYXlXaXRoVFMgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgVFNDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./src/DisplayData/DisplayData.jsx":
/*!*****************************************!*\
  !*** ./src/DisplayData/DisplayData.jsx ***!
  \*****************************************/
/*! exports provided: DisplayData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DisplayData\", function() { return DisplayData; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/austinroy/Documents/myprojects/react-ts-component-demo/src/DisplayData/DisplayData.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst DisplayData = ({\n  data\n}) => {\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }\n  }, \"Name: \", data.name), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }\n  }, \"Alias: \", data.alias.join(', ')), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }\n  }, \"Powers: \", data.powers.join(', ')), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }\n  }, \"Rating: \", data.rating));\n};\n\nDisplayData.propTypes = {\n  data: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__[\"shape\"])({\n    name: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"string\"],\n    alias: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__[\"arrayOf\"])(prop_types__WEBPACK_IMPORTED_MODULE_1__[\"string\"]),\n    powers: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__[\"arrayOf\"])(prop_types__WEBPACK_IMPORTED_MODULE_1__[\"string\"]),\n    rating: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"number\"]\n  })\n};\nDisplayData.defaultProps = {\n  data: {\n    name: '',\n    alias: [],\n    powers: [],\n    rating: null\n  }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvRGlzcGxheURhdGEvRGlzcGxheURhdGEuanN4PzAxMDkiXSwibmFtZXMiOlsiRGlzcGxheURhdGEiLCJkYXRhIiwibmFtZSIsImFsaWFzIiwiam9pbiIsInBvd2VycyIsInJhdGluZyIsInByb3BUeXBlcyIsInNoYXBlIiwic3RyaW5nIiwiYXJyYXlPZiIsIm51bWJlciIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLE1BQU1BLFdBQVcsR0FBRyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFZO0FBQzVCLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBWUEsSUFBSSxDQUFDQyxJQUFqQixDQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBYUQsSUFBSSxDQUFDRSxLQUFMLENBQVdDLElBQVgsQ0FBZ0IsSUFBaEIsQ0FBYixDQUZKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBY0gsSUFBSSxDQUFDSSxNQUFMLENBQVlELElBQVosQ0FBaUIsSUFBakIsQ0FBZCxDQUhKLEVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBY0gsSUFBSSxDQUFDSyxNQUFuQixDQUpKLENBREo7QUFRSCxDQVREOztBQVdBTixXQUFXLENBQUNPLFNBQVosR0FBd0I7QUFDcEJOLE1BQUksRUFBRU8sd0RBQUssQ0FBQztBQUNSTixRQUFJLEVBQUVPLGlEQURFO0FBRVJOLFNBQUssRUFBRU8sMERBQU8sQ0FBQ0QsaURBQUQsQ0FGTjtBQUdSSixVQUFNLEVBQUVLLDBEQUFPLENBQUNELGlEQUFELENBSFA7QUFJUkgsVUFBTSxFQUFFSyxpREFBTUE7QUFKTixHQUFEO0FBRFMsQ0FBeEI7QUFTQVgsV0FBVyxDQUFDWSxZQUFaLEdBQTJCO0FBQ3ZCWCxNQUFJLEVBQUU7QUFDRkMsUUFBSSxFQUFFLEVBREo7QUFFRkMsU0FBSyxFQUFFLEVBRkw7QUFHRkUsVUFBTSxFQUFFLEVBSE47QUFJRkMsVUFBTSxFQUFFO0FBSk47QUFEaUIsQ0FBM0IiLCJmaWxlIjoiLi9zcmMvRGlzcGxheURhdGEvRGlzcGxheURhdGEuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtzaGFwZSwgc3RyaW5nLCBudW1iZXIsIGFycmF5T2Z9IGZyb20gJ3Byb3AtdHlwZXMnXG5cblxuY29uc3QgRGlzcGxheURhdGEgPSAoe2RhdGF9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+TmFtZToge2RhdGEubmFtZX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+QWxpYXM6IHtkYXRhLmFsaWFzLmpvaW4oJywgJyl9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlBvd2Vyczoge2RhdGEucG93ZXJzLmpvaW4oJywgJyl9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlJhdGluZzoge2RhdGEucmF0aW5nfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbkRpc3BsYXlEYXRhLnByb3BUeXBlcyA9IHtcbiAgICBkYXRhOiBzaGFwZSh7XG4gICAgICAgIG5hbWU6IHN0cmluZyxcbiAgICAgICAgYWxpYXM6IGFycmF5T2Yoc3RyaW5nKSxcbiAgICAgICAgcG93ZXJzOiBhcnJheU9mKHN0cmluZyksXG4gICAgICAgIHJhdGluZzogbnVtYmVyLFxuICAgIH0pXG59XG5cbkRpc3BsYXlEYXRhLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBkYXRhOiB7XG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICBhbGlhczogW10sXG4gICAgICAgIHBvd2VyczogW10sXG4gICAgICAgIHJhdGluZzogbnVsbCxcbiAgICB9XG59XG5cbmV4cG9ydCB7IERpc3BsYXlEYXRhIH0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/DisplayData/DisplayData.jsx\n");

/***/ }),

/***/ "./src/DisplayData/index.ts":
/*!**********************************!*\
  !*** ./src/DisplayData/index.ts ***!
  \**********************************/
/*! exports provided: DisplayData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DisplayData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayData */ \"./src/DisplayData/DisplayData.jsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"DisplayData\", function() { return _DisplayData__WEBPACK_IMPORTED_MODULE_0__[\"DisplayData\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvRGlzcGxheURhdGEvaW5kZXgudHM/ZDUxMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIuL3NyYy9EaXNwbGF5RGF0YS9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vRGlzcGxheURhdGEnXG5cbmludGVyZmFjZSBEaXNwbGF5RGF0YVByb3BzIHtcbiAgICBkYXRhIDoge1xuICAgICAgICBuYW1lOiBTdHJpbmcsXG4gICAgICAgIGFsaWFzOiBTdHJpbmdbXSxcbiAgICAgICAgcG93ZXJzOiBTdHJpbmdbXSxcbiAgICAgICAgcmF0aW5nOiBOdW1iZXIsXG4gICAgfVxufVxuXG5kZWNsYXJlIG1vZHVsZSAnLid7XG4gICAgZXhwb3J0IGNvbnN0IERpc3BsYXlEYXRhOiBSZWFjdC5GQzxEaXNwbGF5RGF0YVByb3BzPlxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/DisplayData/index.ts\n");

/***/ }),

/***/ "./src/pages/WithTS.tsx":
/*!******************************!*\
  !*** ./src/pages/WithTS.tsx ***!
  \******************************/
/*! exports provided: DisplayWithTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DisplayWithTS\", function() { return DisplayWithTS; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _DisplayData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DisplayData */ \"./src/DisplayData/index.ts\");\nvar _jsxFileName = \"/Users/austinroy/Documents/myprojects/react-ts-component-demo/src/pages/WithTS.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst DisplayWithTS = () => {\n  const info = {\n    name: 'Sheev Palpatine',\n    alias: ['Chancellor Palpatine', 'Emperor Palpatine', 'Darth Sidious'],\n    powers: ['Force Push', 'Force Pull', 'Force Vision', 'Force Lightning', 'Sith Storm', 'Essense Transfer'],\n    rating: 10\n  };\n  return __jsx(_DisplayData__WEBPACK_IMPORTED_MODULE_1__[\"DisplayData\"], {\n    data: info,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 12\n    }\n  });\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvV2l0aFRTLnRzeD82ZWM4Il0sIm5hbWVzIjpbIkRpc3BsYXlXaXRoVFMiLCJpbmZvIiwibmFtZSIsImFsaWFzIiwicG93ZXJzIiwicmF0aW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxhQUFhLEdBQUcsTUFBTTtBQUN4QixRQUFNQyxJQUFJLEdBQUc7QUFDVEMsUUFBSSxFQUFFLGlCQURHO0FBRVRDLFNBQUssRUFBRSxDQUFFLHNCQUFGLEVBQTBCLG1CQUExQixFQUErQyxlQUEvQyxDQUZFO0FBR1RDLFVBQU0sRUFBRSxDQUFDLFlBQUQsRUFBZSxZQUFmLEVBQTZCLGNBQTdCLEVBQTZDLGlCQUE3QyxFQUFnRSxZQUFoRSxFQUE4RSxrQkFBOUUsQ0FIQztBQUlUQyxVQUFNLEVBQUU7QUFKQyxHQUFiO0FBTUEsU0FBTyxNQUFDLHdEQUFEO0FBQWEsUUFBSSxFQUFFSixJQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQVA7QUFDSCxDQVJEIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL1dpdGhUUy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBEaXNwbGF5RGF0YSB9IGZyb20gJy4uL0Rpc3BsYXlEYXRhJ1xuXG5jb25zdCBEaXNwbGF5V2l0aFRTID0gKCkgPT4ge1xuICAgIGNvbnN0IGluZm8gPSB7XG4gICAgICAgIG5hbWU6ICdTaGVldiBQYWxwYXRpbmUnLFxuICAgICAgICBhbGlhczogWyAnQ2hhbmNlbGxvciBQYWxwYXRpbmUnLCAnRW1wZXJvciBQYWxwYXRpbmUnLCAnRGFydGggU2lkaW91cyddLFxuICAgICAgICBwb3dlcnM6IFsnRm9yY2UgUHVzaCcsICdGb3JjZSBQdWxsJywgJ0ZvcmNlIFZpc2lvbicsICdGb3JjZSBMaWdodG5pbmcnLCAnU2l0aCBTdG9ybScsICdFc3NlbnNlIFRyYW5zZmVyJ10sXG4gICAgICAgIHJhdGluZzogMTBcbiAgICAgIH1cbiAgICByZXR1cm4gPERpc3BsYXlEYXRhIGRhdGE9e2luZm99Lz5cbn1cblxuZXhwb3J0IHsgRGlzcGxheVdpdGhUUyB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/WithTS.tsx\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });