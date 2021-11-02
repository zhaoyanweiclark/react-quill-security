"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.themes = exports.defaultUuid = exports.defaultToolbar = exports.defaultInterval = exports.defaultAutoRecover = exports.cacheModes = void 0;
var themes = {
  SNOW: 'snow',
  BUBBLE: 'bubble'
};
exports.themes = themes;
var cacheModes = {
  NO_CACHE: 0,
  REFRESH_CLEAR_CACHE: 1,
  CLOSE_CLEAR_CACHE: 2,
  ALWAYS_KEEP_CACHE: 3
};
exports.cacheModes = cacheModes;
var defaultUuid = '0'.repeat(32);
exports.defaultUuid = defaultUuid;
var defaultInterval = 5;
exports.defaultInterval = defaultInterval;
var defaultAutoRecover = false;
exports.defaultAutoRecover = defaultAutoRecover;
var defaultToolbar = [[{
  'font': []
}], ['bold', 'italic', 'underline', 'strike'], [{
  'indent': '-1'
}, {
  'indent': '+1'
}, {
  'direction': 'rtl'
}, {
  'align': []
}], [{
  'list': 'ordered'
}, {
  'list': 'bullet'
}], [{
  'color': []
}, {
  'background': []
}], [{
  'header': 1
}, {
  'header': 2
}], [{
  'size': ['small', false, 'large', 'huge']
}, {
  'header': [1, 2, 3, 4, 5, 6, false]
}], ['link', 'image', 'video'], ['blockquote', 'code-block'], [{
  'script': 'sub'
}, {
  'script': 'super'
}], ['clean']];
exports.defaultToolbar = defaultToolbar;