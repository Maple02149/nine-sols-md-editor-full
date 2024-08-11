"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.title = void 0;
exports.titleExecute = titleExecute;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _react = _interopRequireDefault(require("react"));
var _title = require("./title1");
var _markdownUtils = require("../utils/markdownUtils");
var _jsxRuntime = require("react/jsx-runtime");
function titleExecute(_ref) {
  var state = _ref.state,
    api = _ref.api,
    prefix = _ref.prefix,
    _ref$suffix = _ref.suffix,
    suffix = _ref$suffix === void 0 ? prefix : _ref$suffix;
  var newSelectionRange = (0, _markdownUtils.selectLine)({
    text: state.text,
    selection: state.selection
  });
  var state1 = api.setSelectionRange(newSelectionRange);
  (0, _markdownUtils.executeCommand)({
    api: api,
    selectedText: state1.selectedText,
    selection: state.selection,
    prefix: prefix,
    suffix: suffix
  });
}
var title = exports.title = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, _title.title1), {}, {
  icon: /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 520 520",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fill: "currentColor",
      d: "M15.7083333,468 C7.03242448,468 0,462.030833 0,454.666667 L0,421.333333 C0,413.969167 7.03242448,408 15.7083333,408 L361.291667,408 C369.967576,408 377,413.969167 377,421.333333 L377,454.666667 C377,462.030833 369.967576,468 361.291667,468 L15.7083333,468 Z M21.6666667,366 C9.69989583,366 0,359.831861 0,352.222222 L0,317.777778 C0,310.168139 9.69989583,304 21.6666667,304 L498.333333,304 C510.300104,304 520,310.168139 520,317.777778 L520,352.222222 C520,359.831861 510.300104,366 498.333333,366 L21.6666667,366 Z M136.835938,64 L136.835937,126 L107.25,126 L107.25,251 L40.75,251 L40.75,126 L-5.68434189e-14,126 L-5.68434189e-14,64 L136.835938,64 Z M212,64 L212,251 L161.648438,251 L161.648438,64 L212,64 Z M378,64 L378,126 L343.25,126 L343.25,251 L281.75,251 L281.75,126 L238,126 L238,64 L378,64 Z M449.047619,189.550781 L520,189.550781 L520,251 L405,251 L405,64 L449.047619,64 L449.047619,189.550781 Z"
    })
  })
});