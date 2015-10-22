/**
 * strip initial and ending single/double quotes
 * from a single/multiline string
 *
 * @param  {String} q
 * @return {String} s
 */
module.exports = function stripquotes(q) {
  var s = q
  var t = s.length
  if (s.charAt(0).match(/\u0022|\u0027/))   s = s.substring(1, t--)
  if (s.charAt(--t).match(/\u0022|\u0027/)) s = s.substring(0, t)
  return s
}
