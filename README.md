# Metro Bundler Minification Bug Reproduction

## TL;DR

```
npm install
npm test
```

## Details

During minification, there are cases where variables are renamed incorrectly, changing the semantics of programs.

Given this code:

```js
function assert(cond) {
	if (!cond) {
		throw new Error('Assertion failed')
	}
}

const o = {
	f: function a(a) {
		return a
	}
}

assert(o.f(1) === 1)
```

The function call `o.f(1)` is compiled to:

```js
(function n(a){return n})()
```

Which causes the assertion to fail.

## Relevant files

- `build.js` the build script
- `src/index.js` the input file
- `dist/bundle.js` the output file
