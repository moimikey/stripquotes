"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stripquotes = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * strip initial and ending single/double quotes
 * from a single/multiline string
 *
 * @param  {String} q
 * @return {String} s
 */
var stripquotes = function stripquotes(q) {
  var quoteStart = "'|\"|\u2018|\u201C|\u2039|\xAB"; // \u0022|\u0027|\u2018|\u201C|\u2039|\u00AB

  var quoteEnd = "'|\"|\u2019|\u201D|\u203A|\xBB"; // \u0022|\u0027|\u2019|\u201D|\u203A|\u00BB

  if (typeof q !== 'string') throw new Error("input was '".concat(_typeof(q), "' and not of type 'string'"));
  if (!q.length) throw new Error("input was empty");
  var s = q;
  var t = s.length;
  if (s.charAt(0).match(new RegExp(quoteStart))) s = s.substring(1, t--);
  if (s.charAt(--t).match(new RegExp(quoteEnd))) s = s.substring(0, t);
  return s;
};

exports.stripquotes = stripquotes;
module.exports = stripquotes;