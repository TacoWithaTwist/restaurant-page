/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadContact: () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact() {}\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHome: () => (/* binding */ loadHome)\n/* harmony export */ });\nfunction loadHome() {\n  const main = document.getElementById(\"main\");\n  if (!main) {\n    const content = document.getElementById(\"content\");\n    const main = document.createElement(\"main\");\n    main.id = \"main\";\n    main.style =\n      \"display:flex; flex-direction: column; gap:5%; background:linear-gradient(to right,#ff5858,#ffc8c8); width:50vw;border-radius:5px;color:#333;text-align:center;\";\n    const review = document.createElement(\"section\");\n    const p = document.createElement(\"p\");\n    p.className = \"main-elements\";\n    p.innerHTML =\n      \"We offer exquisite Cheesecake slices made by michelin starred pastry chefs.<br>Make sure to contact us for a reservation or delivery service!\";\n    const schedule = document.createElement(\"section\");\n    schedule.className = \"main-elements\";\n    schedule.innerHTML =\n      \" Opening Hours: 8:00 AM <br>8:00 AM - 9:00 AM: Opening preparations (cleaning, setting up displays)<br>9:00 AM - 12:00 PM: Baking and preparing cheesecakes<br>12:00 PM - 2:00 PM: Lunch break for staff<br>2:00 PM - 6:00 PM: Continued baking and preparation<br>  6:00 PM - 7:00 PM: Evening rush (peak hours)<br> 7:00 PM - 8:00 PM: Closing preparations, cleaning <br>Closing Hours: 8:00 PM\";\n    const address = document.createElement(\"section\");\n    address.className = \"main-elements\";\n    address.innerHTML = \"Fake Address: Cedria Tower 1999 Tiannment\";\n    review.appendChild(p);\n    content.appendChild(main);\n    main.appendChild(review);\n    main.appendChild(schedule);\n    main.appendChild(address);\n  }\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n\n(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu() {\n  const content = document.getElementById(\"content\");\n  const main = document.createElement(\"main\");\n  main.id = \"main\";\n  main.style =\n    \"display:flex; flex-direction: column; gap:5%; background:linear-gradient(to right,#FFC8C8,#F89B29); width:50vw;border-radius:5px;color:#333;text-align:center;\";\n  const menu = document.createElement(\"section\");\n  menu.innerHTML =\n    \"1. Basque Burnt cheesecake<br>2. No-Bake Cheesecake<br>3. Japanese Cheesecake<br>4. Baklava Cheesecake<br>5. Cheesecake Cake<br>6. Cheesecake Cookies<br>7. New York Cheesecake<br>8. Chicago Cheesecake<br>9. Philadelphia Cheesecake<br>10. German Cheesecake (Käsekuchen)<br>11. Savory Cheesecake<br>12. Ricotta Cheesecake<br>13. Vegan Cheesecake<br>14. Swedish Cheesecake (Ostkaka)<br> 15. Chocolate Cheesecake<br>16. Russian cheesecake (Vatrushka)\";\n  menu.className = \"main-elements\";\n  main.appendChild(menu);\n  content.appendChild(main);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pageLoad: () => (/* binding */ pageLoad)\n/* harmony export */ });\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _reload_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reload.js */ \"./src/reload.js\");\n//main Color #F7F7FF\n//Secondary Color #A69658\n//Accent Color #EA526F\n\n\n\n\n\nfunction pageLoad() {\n  const body = document.body;\n  body.style =\n    \"height = 100vh; width = 100vw; background-color:#F7F7FF; font-family: 'Quicksand', sans-serif;\";\n  const content = document.getElementById(\"content\");\n  content.style =\n    \"display:flex;flex-direction:column; height:100vh; width:100vw; align-items:center;\";\n\n  const nav = document.createElement(\"nav\");\n  nav.style =\n    \"width = 30vw; display:flex; justify-content:center; align-items:center;\";\n  const ul = document.createElement(\"ul\");\n  ul.style =\n    \"list-style-type : none;  display: flex;  gap: 2vw; color:#A69658;\";\n  const home = document.createElement(\"li\");\n  home.innerHTML = \"Home\";\n  const menu = document.createElement(\"li\");\n  menu.innerHTML = \"Menu\";\n  const contact = document.createElement(\"li\");\n  contact.innerHTML = \"Contact\";\n  ul.appendChild(home);\n  ul.appendChild(menu);\n  ul.appendChild(contact);\n  nav.appendChild(ul);\n  content.appendChild(nav);\n  home.addEventListener(\"click\", function () {\n    (0,_reload_js__WEBPACK_IMPORTED_MODULE_3__.reload)();\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\n  });\n  menu.addEventListener(\"click\", function () {\n    (0,_reload_js__WEBPACK_IMPORTED_MODULE_3__.reload)();\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.loadMenu)();\n  });\n  contact.addEventListener(\"click\", function () {\n    (0,_reload_js__WEBPACK_IMPORTED_MODULE_3__.reload)();\n    (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.loadContact)();\n  });\n  (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/pageLoad.js?");

/***/ }),

/***/ "./src/reload.js":
/*!***********************!*\
  !*** ./src/reload.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   reload: () => (/* binding */ reload)\n/* harmony export */ });\nfunction reload() {\n  const main = document.getElementById(\"main\");\n  const things = document.getElementsByClassName(\"main-elements\");\n  while (things.length > 0) {\n    main.remove(things[0]);\n  }\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/reload.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;