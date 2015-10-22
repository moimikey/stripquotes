var test = require('tape');

test('returns a `stripquotes` function', function (t) {
  var stripquotes = require('./')
  t.plan(1)
  t.equal(typeof stripquotes, 'function')
  t.end()
});

test('can remove single quotes from a single line string', function (t) {
  var stripquotes = require('./')
  t.plan(1)
  t.equal(stripquotes("'cheese crackers'"), 'cheese crackers')
  t.end()
});

test('can remove double quotes from a single line string', function (t) {
  var stripquotes = require('./')
  t.plan(1)
  t.equal(stripquotes('"cheese crackers"'), 'cheese crackers')
  t.end()
});

test('can remove single quotes from a multiline string', function (t) {
  var stripquotes = require('./')
  t.plan(1)
  t.equal(stripquotes("'cheese \
                               \
          crackers'"), 'cheese \
                               \
          crackers')
  t.end()
});

test('can remove double quotes from a multiline string', function (t) {
  var stripquotes = require('./')
  t.plan(1)
  t.equal(stripquotes('"cheese \
                               \
          crackers"'), 'cheese \
                               \
          crackers')
  t.end()
});
