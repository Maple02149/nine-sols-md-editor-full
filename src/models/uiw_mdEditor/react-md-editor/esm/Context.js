import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
export function reducer(state, action) {
  return _extends({}, state, action);
}
export var EditorContext = /*#__PURE__*/React.createContext({
  markdown: ''
});