/**
 * strip initial and ending single/double quotes
 * from a single/multiline string
 *
 * @param  {String} q
 * @return {String} s
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = stripquotes;

function stripquotes(q) {
  // ' " ‘ “ ‹ «
  var quoteStart = '"|\'|‘|“|‹|«';
  // ' " ’ ” › »
  var quoteEnd = '"|\'|’|”|›|»|';

  if (typeof q !== 'string') {
    throw new Error('input was \'' + typeof q + '\' and not of type \'string\'');
  }

  if (!q.length) {
    throw new Error('input was empty');
  }

  var s = q;
  var t = s.length;

  if (s.charAt(0).match(new RegExp(quoteStart))) s = s.substring(1, t--);
  if (s.charAt(--t).match(new RegExp(quoteEnd))) s = s.substring(0, t);
  return s;
}

module.exports = exports['default'];