# stripquotes [![Build Status][travis-image]][travis-url]
[![Version][npm-version-image]][npm-version-url] [![License][npm-license-image]][npm-license-url] [![Downloads][npm-downloads-image]][npm-downloads-url] [![Deps][npm-deps-image]][npm-deps-url] [![DevDeps][npm-devdeps-image]][npm-devdeps-url]

> strip leading/trailing single or double quotes from a string, including guillemets!

# examples
```js
import stripquotes from 'stripquotes'

stripquotes(`«Ich liebe dich»`)
> "Ich liebe dich..."
stripquotes('“uhhhh na-na-na-na!”')
> "uhhhh na-na-na-na!"
stripquotes('"whatever gorl..."')
> "whatever gorl..."
```

> yaaaaassss queen yaaaaaassss

[npm-version-url]: https://www.npmjs.com/package/stripquotes
[npm-version-image]: https://img.shields.io/npm/v/stripquotes.svg
[npm-license-url]: https://github.com/moimikey/stripquotes/blob/master/LICENSE
[npm-license-image]: https://img.shields.io/npm/l/stripquotes.svg
[npm-downloads-url]: https://www.npmjs.com/package/stripquotes
[npm-downloads-image]: https://img.shields.io/npm/dm/stripquotes.svg
[npm-deps-url]: https://david-dm.org/moimikey/stripquotes
[npm-deps-image]: https://img.shields.io/david/moimikey/stripquotes.svg
[npm-devdeps-url]: https://david-dm.org/moimikey/stripquotes
[npm-devdeps-image]: https://img.shields.io/david/dev/moimikey/stripquotes.svg
[travis-url]: https://travis-ci.org/moimikey/stripquotes
[travis-image]: https://travis-ci.org/moimikey/stripquotes.svg?branch=master
