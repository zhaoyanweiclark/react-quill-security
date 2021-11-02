"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _idbKeyval = require("idb-keyval");

var objectStore = (0, _idbKeyval.createStore)('react-quill-security-db', 'react-quill-security-store');
var store = {
  get: function get(key) {
    return (0, _idbKeyval.get)(key, objectStore);
  },
  set: function set(key, value) {
    return (0, _idbKeyval.set)(key, value, objectStore);
  },
  del: function del(key) {
    return (0, _idbKeyval.del)(key, objectStore);
  },
  clear: function clear() {
    return (0, _idbKeyval.clear)(objectStore);
  }
};
var _default = store;
exports.default = _default;