"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _setTimeout2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/set-timeout"));

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var _this = void 0;

var Hero = function Hero() {};

var sleep = function sleep(t) {
  return new _promise["default"](function (resolve) {
    return (0, _setTimeout2["default"])(resolve, t * 1000);
  });
};

var _default = {
  init: function init() {
    _this.a = new Hero();
  },
  check: function check() {
    var _context;

    console.log((0, _includes["default"])(_context = [1, 2, 3]).call(_context, 4));
  },
  run: function () {
    var _run = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return sleep(3);

            case 2:
              console.log('done');

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee);
    }));

    function run() {
      return _run.apply(this, arguments);
    }

    return run;
  }()
};
exports["default"] = _default;