"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = QuillSecurity;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireWildcard(require("react"));

var _quill = _interopRequireDefault(require("quill"));

var _reactConfirmAlert = require("react-confirm-alert");

var _store = _interopRequireDefault(require("../services/store"));

var _settings = require("../services/settings");

require("react-confirm-alert/src/react-confirm-alert.css");

require("quill/dist/quill.snow.css");

require("quill/dist/quill.bubble.css");

require("../assets/style.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function QuillSecurity(props) {
  var _props$cache$uuid, _props$cache, _props$cache$mode, _props$cache2, _props$cache3, _props$cache4, _props$cache$autoReco, _props$cache5;

  var intervalIndex = (0, _react.useRef)(0);
  var textChange = (0, _react.useRef)(false);
  var theme = (0, _react.useRef)(props.theme || _settings.themes.SNOW);
  var toolbar = (0, _react.useRef)(props.toolbar || _settings.defaultToolbar);
  var value = (0, _react.useRef)(props.value || null);
  var onChange = (0, _react.useRef)(props.onChange || null);
  var quill = (0, _react.useRef)();
  var cache = (0, _react.useRef)({
    uuid: (_props$cache$uuid = (_props$cache = props.cache) === null || _props$cache === void 0 ? void 0 : _props$cache.uuid) !== null && _props$cache$uuid !== void 0 ? _props$cache$uuid : _settings.defaultUuid,
    mode: (_props$cache$mode = (_props$cache2 = props.cache) === null || _props$cache2 === void 0 ? void 0 : _props$cache2.mode) !== null && _props$cache$mode !== void 0 ? _props$cache$mode : _settings.cacheModes.NO_CACHE,
    interval: Math.max(0, parseInt(isNaN((_props$cache3 = props.cache) === null || _props$cache3 === void 0 ? void 0 : _props$cache3.interval) ? _settings.defaultInterval : (_props$cache4 = props.cache) === null || _props$cache4 === void 0 ? void 0 : _props$cache4.interval, 10)),
    autoRecover: (_props$cache$autoReco = (_props$cache5 = props.cache) === null || _props$cache5 === void 0 ? void 0 : _props$cache5.autoRecover) !== null && _props$cache$autoReco !== void 0 ? _props$cache$autoReco : _settings.defaultAutoRecover,
    get: function () {
      var _get = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", _store.default.get(cache.current.uuid));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function get() {
        return _get.apply(this, arguments);
      }

      return get;
    }(),
    set: function () {
      var _set = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _store.default.set(cache.current.uuid, {
                  mode: cache.current.mode,
                  contents: quill.current.getContents()
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function set() {
        return _set.apply(this, arguments);
      }

      return set;
    }(),
    del: function () {
      var _del = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _store.default.del(cache.current.uuid);

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function del() {
        return _del.apply(this, arguments);
      }

      return del;
    }(),
    clear: function () {
      var _clear = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _store.default.clear();

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function clear() {
        return _clear.apply(this, arguments);
      }

      return clear;
    }(),
    getMode: function () {
      var _getMode = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
        var cached;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _store.default.get(cache.current.uuid);

              case 2:
                cached = _context5.sent;
                return _context5.abrupt("return", cached.mode);

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function getMode() {
        return _getMode.apply(this, arguments);
      }

      return getMode;
    }(),
    getContents: function () {
      var _getContents = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
        var cached;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _store.default.get(cache.current.uuid);

              case 2:
                cached = _context6.sent;
                return _context6.abrupt("return", cached.contents);

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function getContents() {
        return _getContents.apply(this, arguments);
      }

      return getContents;
    }()
  });
  var quillSetup = (0, _react.useRef)(props.quillSetup);
  var quillReady = (0, _react.useRef)(props.quillReady);

  var recoverCache = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(cached) {
      var _cached$contents, _cached$contents$ops$, _cached$contents$ops$2;

      var storagecacheLevel;
      return _regenerator.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              if (cached !== null && cached !== void 0 && cached.mode) {
                _context7.next = 2;
                break;
              }

              return _context7.abrupt("return", false);

            case 2:
              if (!(!((_cached$contents = cached.contents) !== null && _cached$contents !== void 0 && _cached$contents.ops) || cached.contents.ops.length === 0)) {
                _context7.next = 4;
                break;
              }

              return _context7.abrupt("return", false);

            case 4:
              if ((_cached$contents$ops$ = cached.contents.ops[0]) !== null && _cached$contents$ops$ !== void 0 && (_cached$contents$ops$2 = _cached$contents$ops$.insert) !== null && _cached$contents$ops$2 !== void 0 && _cached$contents$ops$2.trim()) {
                _context7.next = 6;
                break;
              }

              return _context7.abrupt("return", false);

            case 6:
              storagecacheLevel = Number(sessionStorage.getItem("quillCacheMode-".concat(cache.current.uuid)));

              if (!(cached.mode === _settings.cacheModes.ALWAYS_KEEP_CACHE)) {
                _context7.next = 9;
                break;
              }

              return _context7.abrupt("return", true);

            case 9:
              if (!(cached.mode === _settings.cacheModes.REFRESH_CLEAR_CACHE)) {
                _context7.next = 11;
                break;
              }

              return _context7.abrupt("return", true);

            case 11:
              if (!(cached.mode === _settings.cacheModes.CLOSE_CLEAR_CACHE)) {
                _context7.next = 19;
                break;
              }

              if (!(storagecacheLevel === _settings.cacheModes.CLOSE_CLEAR_CACHE)) {
                _context7.next = 16;
                break;
              }

              return _context7.abrupt("return", true);

            case 16:
              _context7.next = 18;
              return cache.current.del();

            case 18:
              return _context7.abrupt("return", false);

            case 19:
              return _context7.abrupt("return", false);

            case 20:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function recoverCache(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var startCache = function startCache() {
    if (cache.current.mode > _settings.cacheModes.NO_CACHE && cache.current.interval > 0) {
      intervalIndex.current = setInterval( /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8() {
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (!textChange.current) {
                  _context8.next = 4;
                  break;
                }

                textChange.current = false;
                _context8.next = 4;
                return cache.current.set();

              case 4:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      })), cache.current.interval * 1000);
    }
  };

  var clearCache = /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9(e) {
      return _regenerator.default.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              e.preventDefault();

              if (!(cache.current.mode < _settings.cacheModes.CLOSE_CLEAR_CACHE)) {
                _context9.next = 4;
                break;
              }

              _context9.next = 4;
              return cache.current.del();

            case 4:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));

    return function clearCache(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  var initialize = (0, _react.useCallback)( /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee12() {
    var quillToolbar, cached;
    return _regenerator.default.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            if (Boolean(quill.current)) {
              _context12.next = 17;
              break;
            }

            if ('function' === typeof quillSetup.current) {
              quillSetup.current(_quill.default);
            }

            quill.current = new _quill.default("#quill-editor-".concat(cache.current.uuid), {
              modules: {
                toolbar: toolbar.current
              },
              theme: theme.current
            });

            if (Boolean(value.current)) {
              quill.current.setContents(value.current);
            }

            quill.current.on('text-change', /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10() {
              var contents;
              return _regenerator.default.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      textChange.current = true;

                      if ('function' === typeof onChange.current) {
                        contents = quill.current.getContents();
                        onChange.current(contents);
                      }

                      if (!(cache.current.interval === 0)) {
                        _context10.next = 5;
                        break;
                      }

                      _context10.next = 5;
                      return cache.current.set();

                    case 5:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10);
            })));

            if ('function' === typeof quillReady.current) {
              quillToolbar = quill.current.getModule('toolbar');
              quillReady.current(quill.current, cache.current, quillToolbar);
            }

            _context12.next = 8;
            return cache.current.get();

          case 8:
            cached = _context12.sent;
            _context12.next = 11;
            return recoverCache(cached);

          case 11:
            if (!_context12.sent) {
              _context12.next = 15;
              break;
            }

            if (cache.current.autoRecover) {
              quill.current.setContents(cached.contents);
              startCache();
            } else {
              (0, _reactConfirmAlert.confirmAlert)({
                message: 'Are you sure to recover editor contents?',
                buttons: [{
                  label: 'Yes',
                  onClick: function onClick() {
                    quill.current.setContents(cached.contents);
                    startCache();
                  }
                }, {
                  label: 'No, clear it!',
                  onClick: function () {
                    var _onClick = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee11() {
                      return _regenerator.default.wrap(function _callee11$(_context11) {
                        while (1) {
                          switch (_context11.prev = _context11.next) {
                            case 0:
                              _context11.next = 2;
                              return cache.current.del();

                            case 2:
                              startCache();

                            case 3:
                            case "end":
                              return _context11.stop();
                          }
                        }
                      }, _callee11);
                    }));

                    function onClick() {
                      return _onClick.apply(this, arguments);
                    }

                    return onClick;
                  }()
                }],
                closeOnClickOutside: false,
                overlayClassName: 'react-quill-security-confirm'
              });
            }

            _context12.next = 16;
            break;

          case 15:
            startCache();

          case 16:
            sessionStorage.setItem("quillCacheMode-".concat(cache.current.uuid), cache.current.mode);

          case 17:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  })), []);
  (0, _react.useEffect)(function () {
    initialize();
    window.addEventListener('beforeunload', clearCache);
    return function () {
      clearInterval(intervalIndex.current);
      window.removeEventListener('beforeunload', clearCache);
    };
  }, [initialize]);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "quill-editor-".concat(cache.current.uuid)
  });
}