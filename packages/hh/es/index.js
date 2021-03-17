import _asyncToGenerator from "@babel/runtime-corejs3/helpers/esm/asyncToGenerator";

var _this = this;

import _regeneratorRuntime from "@babel/runtime-corejs3/regenerator";
import _Promise from "@babel/runtime-corejs3/core-js-stable/promise";
import _setTimeout from "@babel/runtime-corejs3/core-js-stable/set-timeout";
import _includesInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/includes";

var Hero = function Hero() {};

var sleep = function sleep(t) {
  return new _Promise(function (resolve) {
    return _setTimeout(resolve, t * 1000);
  });
};

export default {
  init: function init() {
    _this.a = new Hero();
  },
  check: function check() {
    var _context;

    console.log(_includesInstanceProperty(_context = [1, 2, 3]).call(_context, 4));
  },
  run: function () {
    var _run = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      return _regeneratorRuntime.wrap(function _callee$(_context2) {
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