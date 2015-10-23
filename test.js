var test = require('tape')

test('returns a `stripquotes` function', function (t) {
  var stripquotes = require('./')
  t.plan(1)
  t.equal(typeof stripquotes, 'function')
  t.end()
})

test('can remove single quotes from a single line string', function (t) {
  var stripquotes = require('./')
  t.plan(1)
  t.equal(stripquotes("'cheese crackers'"), 'cheese crackers')
  t.end()
})

test('can remove double quotes from a single line string', function (t) {
  var stripquotes = require('./')
  t.plan(1)
  t.equal(stripquotes('"cheese crackers"'), 'cheese crackers')
  t.end()
})

test('can remove single quotes from a multiline string', function (t) {
  var stripquotes = require('./')
  t.plan(1)
  t.equal(stripquotes("'cheese \
                               \
          crackers'"), 'cheese \
                               \
          crackers')
  t.end()
})

test('can remove double quotes from a multiline string', function (t) {
  var stripquotes = require('./')
  t.plan(1)
  t.equal(stripquotes('"cheese \
                               \
          crackers"'), 'cheese \
                               \
          crackers')
  t.end()
})

test('will throw if a non-string is passed to the constructor', function (t) {
  var stripquotes = require('./')
  t.plan(3)
  t.throws(function() {
    stripquotes({})
  });
  t.throws(function() {
    stripquotes()
  });
  t.throws(function() {
    stripquotes(true)
  });
  t.end()
})

test('can remove single curly/smart quotes from a string', function (t) {
  var stripquotes = require('./')
  t.plan(1)
  t.equal(stripquotes('‘cheese crackers’'), 'cheese crackers')
  t.end()
})

test('can remove double curly/smart quotes from a string', function (t) {
  var stripquotes = require('./')
  t.plan(1)
  t.equal(stripquotes('“cheese crackers”'), 'cheese crackers')
  t.end()
})

test('can remove single guillemets from a string', function (t) {
  var stripquotes = require('./')
  t.plan(1)
  t.equal(stripquotes('‹cheese crackers›'), 'cheese crackers')
  t.end()
})

test('can remove double guillemets from a string', function (t) {
  var stripquotes = require('./')
  t.plan(1)
  t.equal(stripquotes('«cheese crackers»'), 'cheese crackers')
  t.end()
})

test.skip('this should fail', function (t) {
  var stripquotes = require('./')
  t.plan(1)
  t.equal(stripquotes('«cheese crackers›'), 'cheese crackers')
  t.end()
})
