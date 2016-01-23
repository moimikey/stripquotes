import stripquotesImport from './'

var test = require('tape')
var stripquotes = require('./')

test('returns a `stripquotes` function', function (t) {
  t.plan(2)
  t.equal(typeof stripquotes, 'function')
  t.equal(typeof stripquotesImport, 'function')
  t.end()
})

test('will throw if a non-string is passed to the constructor', function (t) {
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

test('can remove single quotes from a single line string', function (t) {
  t.plan(1)
  t.equal(stripquotes("'cheese crackers'"), 'cheese crackers')
  t.end()
})

test('can remove double quotes from a single line string', function (t) {
  t.plan(1)
  t.equal(stripquotes('"cheese crackers"'), 'cheese crackers')
  t.end()
})

test('can remove single quotes from a multiline string', function (t) {
  t.plan(1)
  t.equal(stripquotes("'cheese \
                               \
          crackers'"), 'cheese \
                               \
          crackers')
  t.end()
})

test('can remove double quotes from a multiline string', function (t) {
  t.plan(1)
  t.equal(stripquotes('"cheese \
                               \
          crackers"'), 'cheese \
                               \
          crackers')
  t.end()
})

test('can remove single curly/smart quotes from a string', function (t) {
  t.plan(1)
  t.equal(stripquotes('‘cheese crackers’'), 'cheese crackers')
  t.end()
})

test('can remove double curly/smart quotes from a string', function (t) {
  t.plan(1)
  t.equal(stripquotes('“cheese crackers”'), 'cheese crackers')
  t.end()
})

test('can remove single guillemets from a string', function (t) {
  t.plan(1)
  t.equal(stripquotes('‹cheese crackers›'), 'cheese crackers')
  t.end()
})

test('can remove double guillemets from a string', function (t) {
  t.plan(1)
  t.equal(stripquotes('«cheese crackers»'), 'cheese crackers')
  t.end()
})

test('can remove unbalanced quotations from a string', function (t) {
  t.plan(3)
  t.equal(stripquotes('«cheese crackers›'), 'cheese crackers')
  t.equal(stripquotes('"cheese crackers\''), 'cheese crackers')
  t.equal(stripquotes('‘cheese crackers”'), 'cheese crackers')
  t.end()
})

test('will return the given string without modification', function (t) {
  t.plan(1)
  t.equal(stripquotes('cheese crackers'), 'cheese crackers')
  t.end()
})
