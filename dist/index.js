"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "cacheModes", {
  enumerable: true,
  get: function get() {
    return _settings.cacheModes;
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _QuillSecurity.default;
  }
});
Object.defineProperty(exports, "themes", {
  enumerable: true,
  get: function get() {
    return _settings.themes;
  }
});

var _QuillSecurity = _interopRequireDefault(require("./components/QuillSecurity"));

var _settings = require("./services/settings");